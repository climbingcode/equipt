class Equipment < ActiveRecord::Base

	belongs_to :user 
	has_many :rentals 
	has_many :owners_usages
	has_many :ratings, :as => :rateable

	scope :search, -> (query) { where(category: query[:category]) if query }

  	validates :equipment_name, :brand, presence: true

end