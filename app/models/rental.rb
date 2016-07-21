class Rental < ActiveRecord::Base

	belongs_to :user
	belongs_to :equipment

	before_save :free_dates

	def free_dates

	end

end