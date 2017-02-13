class Api::Owner::RentalsController < ApplicationController

	protect_from_forgery with: :exception

	before_filter :ensure_authenticated_user

	def update
		rental = current_user.equipments.find(params[:equipment_id]).rentals.find(params[:id])
		render json: rental if rental.update_attributes(rental_params)
	end

	def destroy
		rental = current_user.equipments.find(params[:equipment_id]).rentals.find(params[:id])
		render json: rental, destroy_notice: true if rental.destroy
	end

	def rental_params
		params.require(:rental).permit(:pickup_date, :dropoff_date, :pick_up_time, :sub_total, :rental_deposit, :rental_total, :total_rental_days, :rental_completed, :rental_confirmed) 
	end

end