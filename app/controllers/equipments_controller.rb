class EquipmentsController < ActionController::Base

	before_filter :restrict_access 

	before_filter :ensure_authenticated_user

	def index
		render json: Equipment.all, status: 200
	end

end