class Rental < ActiveRecord::Base

	belongs_to :user
	belongs_to :equipment

	validate :dates_are_vacant, :has_agreed_to_terms

	before_save :set_total_days, :set_rental_cost

	after_save :send_confirmation_email, if: :rental_confirmed_changed?
	after_create :send_create_emails
	after_destroy :send_destroy_email

	# validates methods

	def dates_are_vacant
		pickup  = self.pickup_date
		dropoff = self.dropoff_date
		rentals = self.equipment.rentals
		
		if (self.pickup_date_changed? || self.dropoff_date_changed?)
			if rentals.where("(pickup_date BETWEEN ? AND ? OR dropoff_date BETWEEN ? AND ?) OR (pickup_date <= ? AND dropoff_date >= ?)", pickup, dropoff, pickup, dropoff, pickup, dropoff).any?
				errors.add(:dates_are_taken, "It looks like #{self.equipment.model} is not free to rent during these dates")
			end
		end

	end

	def has_agreed_to_terms
		errors.add(:terms_not_agreed_to, "Please agree to the rental terms") unless self.agreed_to_terms
	end

	# before create methods

	def set_total_days
		self.total_rental_days = (self.dropoff_date - self.pickup_date).to_i
	end

	def set_rental_cost
		equipment = Equipment.find(self.equipment_id)
		self.sub_total 	    = equipment.price_per_day * self.total_rental_days
		self.rental_total   = self.sub_total + equipment.desposit_amount
		self.rental_deposit = equipment.desposit_amount
	end


	# =============
	# EMAIL ALERTS
	# =============

	def send_create_emails
		RentalMailer.needs_confirmation( self ).deliver
		RentalMailer.waiting_on_owners_confirmation( self ).deliver
	end

	def send_destroy_email
		RentalMailer.rental_destroyed( self ).deliver
	end

	def send_confirmation_email
		RentalMailer.owner_confirmed( self ).deliver if self.rental_confirmed
	end


end