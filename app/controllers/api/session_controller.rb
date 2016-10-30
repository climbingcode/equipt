class Api::SessionController < ApplicationController

	protect_from_forgery with: :exception

	def create
		user = User.find_by_email(params[:email])
		if user && user.authenticate(params[:password])
			render json: user, send_api_token: true, status: 200
		else 
			render json: {notice: { error: "Incorrect credentials, try again!" } }, status: 200
		end
	end

	def facebook_auth
		user = User.from_omniauth(request.env["omniauth.auth"])
    	render json: user, send_api_token: true, status: 200
	end

	def forgot_password
		render json: {notice: { info: "Sent a link to reset your password to your email" }}
	end

end