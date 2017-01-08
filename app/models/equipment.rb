class Equipment < ActiveRecord::Base

	belongs_to :user 
	has_many :rentals, dependent: :destroy 
	has_many :owners_usages, dependent: :destroy
	has_many :ratings, :as => :rateable, dependent: :destroy
	has_many :images, :as => :imageable, dependent: :destroy

    scope :exclude_user, -> (user) { where.not(user_id: user.id) }

    scope :search_page, -> (page) { page(page.to_i) }
    scope :search_category, -> (category) { where("category LIKE ?", "#{ category }%") }
    scope :search_sub_category, -> (sub_category) { where("sub_category LIKE ?", "#{ sub_category }%") }
    scope :fuzzy_search, -> (fuzzy_search) { where("equipment_name LIKE ?", "%#{ fuzzy_search }%") }

    scope :search_by_availability, -> (dates) do 
        if dates && dates[:pickup].present? && dates[:dropoff].present?
            pickup  = DateTime.parse(dates[:pickup]) 
            dropoff = DateTime.parse(dates[:dropoff])
            rentals = Rental.where.not("(pickup_date BETWEEN ? AND ? OR dropoff_date BETWEEN ? AND ?) OR (pickup_date <= ? AND dropoff_date >= ?)", pickup, dropoff, pickup, dropoff, pickup, dropoff)
            self.joins(:rentals).merge(rentals).uniq
        end
    end

    scope :search_location, -> (location) do
        if location && location[:lat].present? && location[:lng].present?
            users = User.users_in_range location
            return self.joins(:user).merge(users).uniq if users.present?
            self
        end
    end

	validates :equipment_name, :brand, :model, :description, :years_old, :price_per_day, :price_per_week, :desposit_amount, presence: true
    validates :sub_category, presence: { message: "Please Select a category" }

	def addImages(images = [])
        images ||= []
		self.images.delete_all
		images.each do |image|
			self.images.create(file: image)
		end
	end

    # Search Methods

    def self.search(query = [])
        Equipment.all  
            .search_location(query[:location])
            .search_category(query[:category])
            .search_sub_category(query[:sub_category])
            .fuzzy_search(query[:fuzzy_search])
            .search_by_availability(query[:dates])
            .search_page(query[:page])
    end

end