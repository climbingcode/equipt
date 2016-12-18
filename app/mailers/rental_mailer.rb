class RentalMailer < ApplicationMailer

	def owners_confirmation( owner )
		@owner = owner
  		mail :to => owner.email, :subject => "Equipt Rental Requested"
	end

	def waiting_on_owners_confirmation( renter, owner )
		@owner = owner
		@renter = renter
  		mail :to => renter.email, :subject => "Waiting on #{ owner.full_name } "
	end


end
