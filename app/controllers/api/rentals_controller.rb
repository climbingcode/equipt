class Api::RentalsController < ApplicationController

	protect_from_forgery with: :exception

	before_filter :ensure_authenticated_user

	def create 
		equipment = Equipment.find(params[:equipment_id])
		rental = equipment.rentals.new(rental_params)
		rental.user = current_user
		if rental.save
			render json: rental, status: 200
		else 
			render json: { errors: rental.errors }, status: 200
		end
	end

	private

	def rental_params
		params.require(:rental).permit(:pickup_date, :dropoff_date, :pick_up_time)
	end

end