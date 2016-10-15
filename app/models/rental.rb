class Rental < ActiveRecord::Base

	belongs_to :user
	belongs_to :equipment

	# validate :dates_are_vacant

	before_save :set_total_days, :set_rental_cost  

	def dates_are_vacant
		if Rental.where("pickup_date >= ? AND dropoff_date <= ?", self.pickup_date, self.dropoff_date).first
			errors.add(:dates_are_taken, "It looks like #{self.equipment.model} is not free to rent during these dates")
		end
	end

	def set_total_days
		self.total_rental_days = (self.dropoff_date - self.pickup_date).to_i
	end

	def set_rental_cost
		equipment = Equipment.find(self.equipment_id)
		self.sub_total 	    = equipment.price_per_day * self.total_rental_days
		self.rental_total   = self.sub_total + equipment.desposit_amount
		self.rental_deposit = equipment.desposit_amount
	end

end