class Api::Owner::RentalsController < ApplicationController

	def destroy
		rental = current_user.equipments.find(params[:equipment_id]).rentals.find(params[:id])
		if rental.destroy
			render json: rental, destroyed_by_owners_notice: true, status: 200
		end
	end

	def confirm
		rental = current_user.equipments.find(params[:equipment_id]).rentals.find(params[:id])
		if rental.update(rental_comfirmed: rental.rental_comfirmed ? false : true)
			render json: rental, owner_confirmed_rental: true, status: 200
		else 
			render json: { errors: rental.errors }, status: 200
		end
	end

end