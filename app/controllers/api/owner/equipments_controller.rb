class Api::Owner::EquipmentsController < ApplicationController

	protect_from_forgery with: :exception

	before_filter :ensure_authenticated_user

	def index
		render json: current_user.equipments.search(params[:query]),
													include: [
														:images
													],
													status: 200
	end

	def show
		render json: current_user.equipments.find(params[:id]), 
					include: 	[
									:rentals, 
									:ratings,
									user: { include: :ratings }
								], 
					status: 200
	end

end