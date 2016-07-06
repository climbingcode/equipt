class Equipment < ActiveRecord::Base

	belongs_to :user 
	has_many :rentals 
	has_many :owners_usages

end