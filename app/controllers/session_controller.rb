class SessionController < ApplicationController

	protect_from_forgery with: :exception

	def create 
		user = User.find_by_username(params[:email])
		if user && user.authenticate(params[:password])
			render json: user, status: 200
		else 
			render json: { errors: 
							{ notice: "Incorrect credentials, try again!" } 
						}, status: 200
		end
	end

	def facebook_auth 
		user = User.from_omniauth(env["omniauth.auth"])
    	render json: user, status: 200
	end

end