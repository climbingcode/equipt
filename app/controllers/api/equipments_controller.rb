class Api::EquipmentsController < ApplicationController

	protect_from_forgery with: :exception

	before_filter :ensure_authenticated_user

	def index
		render json: Equipment.search(params[:query]).exclude_user(current_user), each_serializer: EquipmentsSerializer, status: 200
	end

	def show
		render json: Equipment.find(params[:id]), serializer: EquipmentSerializer, status: 200
	end

	def create
		equipment = current_user.equipments.new(equipment_params)
		if equipment.save
			equipment.addImages(params[:equipment][:images])
			render json: equipment, create_notice: true, status: 200
		else
			render json: { errors: equipment.errors }, status: 200
		end
	end

	def update
		equipment = current_user.equipments.find(params[:id])
		if equipment.update(equipment_params)
			equipment.addImages(params[:equipment][:images])
			render json: equipment, update_notice: true, status: 200
		else 
			render json: { errors: equipment.errors }, status: 200
		end
	end

	def destroy 
		equipment = current_user.equipments.find(params[:id])
		if equipment.destroy
			render json: equipment, destroy_notice: true, status: 200
		else 
			render json: { notice: { error: "Error removing #{equipment.equipment_name}" } }, status: 200
		end
	end

	private

	def equipment_params
		params.require(:equipment).permit(:category, :sub_category, :equipment_name, :brand, :model, :description, :years_old, :price_per_day, :price_per_week, :desposit_amount)
	end

end