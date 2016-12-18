class Rental < ActiveRecord::Base

	belongs_to :user
	belongs_to :equipment

	validate :dates_are_vacant

	before_save :set_total_days, :set_rental_cost, :send_create_emails

	def dates_are_vacant
		pickup  = self.pickup_date
		dropoff = self.dropoff_date
		rentals = Rental.where.not("(pickup_date BETWEEN ? AND ? OR dropoff_date BETWEEN ? AND ?) OR (pickup_date <= ? AND dropoff_date >= ?)", pickup, dropoff, pickup, dropoff, pickup, dropoff)
	
		if rentals.any?
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

	def send_create_emails
		owner  = self.equipment.user
		renter = User.find self.user_id
		RentalMailer.owners_confirmation( owner ).deliver
		RentalMailer.waiting_on_owners_confirmation( renter, owner ).deliver
	end

end