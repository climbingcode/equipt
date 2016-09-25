class Equipment < ActiveRecord::Base

	belongs_to :user 
	has_many :rentals 
	has_many :owners_usages
	has_many :ratings, :as => :rateable
	has_many :images, :as => :imageable

	scope :search, -> (query) { where(category: query[:category]) if query }

  	validates :equipment_name, :brand, presence: true

  	def addImages(images)
  		self.images.delete_all
  		images.each do |image|
  			self.images.create(file: image)
  		end
  	end

end