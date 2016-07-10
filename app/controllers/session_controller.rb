class SessionController < ApplicationController

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

	end

end