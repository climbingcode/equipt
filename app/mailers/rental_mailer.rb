class RentalMailer < ApplicationMailer

	def needs_confirmation( rental )
		@rental = rental
  		mail :to => @rental.equipment.user.email, :subject => "Equipt Rental Requested"
	end

	def owner_confirmed( rental )
		@rental = rental 
		mail :to => rental.user.email, :subject => "Owner Confirmed"
	end

	def waiting_on_owners_confirmation( rental )
		@rental = rental		
		mail :to => @rental.user.email, :subject => "Waiting on #{ @rental.equipment.user.full_name }"
	end

	def rental_destroyed( rental )
		@rental = rental
		mail :to => @rental.user.email, :subject => "Rental of #{ @rental.equipment.equipment_name }"
	end

end
