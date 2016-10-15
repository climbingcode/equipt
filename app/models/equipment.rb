class Equipment < ActiveRecord::Base

	belongs_to :user 
	has_many :rentals 
	has_many :owners_usages
	has_many :ratings, :as => :rateable
	has_many :images, :as => :imageable

    scope :search_category, -> (query) { where("category LIKE ?", "#{query[:category]}%") }
    scope :search_sub_category, -> (query) { where("sub_category LIKE ?", "#{query[:sub_category]}%") }

  	validates :equipment_name, :brand, presence: true

    validates :sub_category, presence: { message: "Please Select a category" }

  	def addImages(images = [])
        images ||= []
  		self.images.delete_all
  		images.each do |image|
  			self.images.create(file: image)
  		end
  	end

    def self.search(query)
        query ||= []
        Equipment.all.search_category(query).search_sub_category(query)
    end

end