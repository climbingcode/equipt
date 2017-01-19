class Api::Owner::RentalsController < ApplicationController

	def destroy
		rental = current_user.equipments.find(params[:equipment_id]).rentals.find(params[:id])
		if rental.destroy
			render json: rental, destroyed_by_owners_notice: true, status: 200
		end
	end

end