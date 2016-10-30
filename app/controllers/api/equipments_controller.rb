class Api::EquipmentsController < ApplicationController

	protect_from_forgery with: :exception

	before_filter :ensure_authenticated_user

	def index
		render json: Equipment.search(params[:query]),
										include: [
											:images
										],
										status: 200
	end

	def show
		render json: Equipment.find(params[:id]), 
									include: 	[
													:rentals, 
													:ratings,
													:images,
													:user => { :include => :ratings }
												], 
									status: 200
	end

	def create
		equipment = current_user.equipments.new(equipment_params)
		if equipment.save
			equipment.addImages(params[:equipment][:images])
			render json: { 	
							equipment: equipment,  
								include: [ :images ],
							notice: {
								info: "#{equipment.equipment_name} has been added to your inventory"
							}
						 }, status: 200
		else
			render json: { errors: equipment.errors }, status: 200
		end
	end

	def update
		equipment = current_user.equipments.find(params[:id])
		if equipment.update(equipment_params)
			equipment.addImages(params[:equipment][:images])
			render json: { 
							equipment: equipment, 
								include: [ :images ], 
							notice: { 
								error: "#{equipment.equipment_name} has been updated"
							} 
						}, status: 200
		else 
			render json: { notice: { error: "Error updating #{equipment.equipment_name}" } }, status: 200
		end
	end

	def destroy 
		equipment = current_user.equipments.find(params[:id])
		if equipment.destroy
			render json: { equipment: equipment, notice: { info: "#{equipment.equipment_name} has been removed"} }, status: 200
		else 
			render json: { notice: { error: "Error removing #{equipment.equipment_name}" } }, status: 200
		end
	end

	private

	def equipment_params
		params.require(:equipment).permit(:category, :sub_category, :equipment_name, :brand, :model, :description, :years_old, :price_per_day, :price_per_week, :desposit_amount)
	end

end