class Equipment < ActiveRecord::Base

	belongs_to :user 
	has_many :rentals, dependent: :destroy 
	has_many :owners_usages, dependent: :destroy
	has_many :ratings, :as => :rateable, dependent: :destroy
	has_many :images, :as => :imageable, dependent: :destroy

  scope :exclude_user, -> (user) { where.not(user_id: user.id) }

  scope :search_category, -> (query) { where("category LIKE ?", "#{query[:category]}%") }
  scope :search_sub_category, -> (query) { where("sub_category LIKE ?", "#{query[:sub_category]}%") }
  scope :fuzzy_search, -> (query) { where("equipment_name LIKE ?", "%#{query[:fuzzy_search]}%") }
  
  scope :search_dates_available, -> (query) do 
    unless query[:dates] && query[:dates][:pickup].empty? && query[:dates][:dropoff].empty?
      # self.joins(:rentals).merge(Rental.where.not("pickup_date >= ? AND dropoff_date <= ?", query[:dates][:pickup], query[:dates][:dropoff] )).uniq
    end
  end

  scope :search_location, -> (query) do
    unless query[:location] && query[:location][:lat].empty? && query[:location][:lng].empty?
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

  def self.search(query)
      query ||= []
      Equipment.all
               .search_location(query)
               .search_category(query)
               .search_sub_category(query)
               .fuzzy_search(query)
               .search_dates_available(query)
  end

end