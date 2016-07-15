class Api::EquipmentsController < ApplicationController

	protect_from_forgery with: :exception

	before_filter :ensure_authenticated_user

	def index
		# head :unauthorized
		render json: Equipment.all, status: 200
	end

	def show
		render json: Equipment.find(params[:id]), :include => [:rentals], status: 200
	end

end