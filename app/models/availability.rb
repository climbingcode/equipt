class Availability < ActiveRecord::Base

	belongs_to :user

	def self.add_availabilities(availabilities, current_user)
		availabilities.each do |hour|
			current_user.availabilities.create(hour: hour)
		end
	end
	
end