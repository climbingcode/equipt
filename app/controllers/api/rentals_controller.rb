class Api::RentalsController < ApplicationController

	protect_from_forgery with: :exception

	before_filter :ensure_authenticated_user

	def index
		rentals = Rental.joins(:equipment).merge(current_user.equipments)
		rented = current_user.rentals
		render json: {
			rentals: RentalSerializer.collection_serialize(rentals),
			rented: RentalSerializer.collection_serialize(rented)
		}, status: 200
	end

	def create 
		equipment = Equipment.find(params[:equipment_id])
		rental = equipment.rentals.new(rental_params)
		rental.user = current_user
		if rental.save
			render json: rental, create_notice: true, status: 200
		else
			render json: { notice: { error: rental.errors } }, status: 200
		end
	end

	def destroy
		if current_user.rentals.find(params[:id]).destroy
			render json: { notice: { info: 'removed rental' } }, status: 200
		end
	end

	private

	def rental_params
		params.require(:rental).permit(:pickup_date, :dropoff_date, :pick_up_time)
	end

end