class Api::EquipmentsController < ApplicationController

	protect_from_forgery with: :exception

	before_filter :ensure_authenticated_user

	def index
		render json: Equipment.search(params[:query]), status: 200
	end

	def show
		render json: Equipment.find(params[:id]), 
									include: 	[
													:rentals, 
													:ratings,
													user: { include: :ratings }
												], 
									status: 200
	end

	def create
		equipment = current_user.equipments.create(equipment_params)

	end

	def equipment_params
		params.require(:rental).permit(:category, :equipment_name, :brand, :model, :description, :years_old, :price_per_day, :price_per_week, :desposit_amount)
	end

end