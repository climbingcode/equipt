class Api::SessionController < ApplicationController

	protect_from_forgery with: :exception

	def create
		user = User.find_by_email(params[:email])
		if user && user.authenticate(params[:password])
			render json: { user: user, api_key: user.session_api_key }, status: 200
		else 
			render json: {notice: { error: "Incorrect credentials, try again!" } }, status: 200
		end
	end

	def facebook_auth
		user = User.from_omniauth(request.env["omniauth.auth"])
    	render json: { user: user, api_key: user.session_api_key }, status: 200
	end

end