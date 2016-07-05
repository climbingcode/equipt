class User < ActiveRecord::Base 

	has_secure_password

	has_many :equipments
	has_many :rentals
	
end