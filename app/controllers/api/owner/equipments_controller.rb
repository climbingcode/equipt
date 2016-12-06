class Api::Owner::EquipmentsController < ApplicationController

	protect_from_forgery with: :exception

	before_filter :ensure_authenticated_user

	def index
		render json: {
			equipment: EquipmentsSerializer.collection_serialize(current_user.equipments),
			total: current_user.equipments.count
		}, status: 200
	end

	def show
		render json: current_user.equipments.find(params[:id]), serializer: EquipmentSerializer,  status: 200 					
	end

end