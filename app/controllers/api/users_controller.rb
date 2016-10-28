class Api::UsersController < ApplicationController

	protect_from_forgery with: :exception

	before_filter :ensure_authenticated_user, except: [:create]

	def create
		user = User.new(user_params)
		if user.save
			render json: { user: user, api_key: user.session_api_key }, status: 200
		else
			render json: { errors: user.errors }, status: 200
		end
	end

	def show
		user_obj = JSON.parse(current_user.to_json({include: { availabilities: { only: :hour }}}))
		render json: { user: current_user, api_key: current_user.session_api_key }, status: 200
	end

	def update 
		if !current_user.authenticate(user_params[:password]) 
			render_notice({ error: "Incorrect credentials, try again!" })
		elsif current_user.update(user_params)
			current_user.save_availabilities(params[:user][:availability])
			user_obj = JSON.parse(current_user.to_json({include: { availabilities: { only: :hour }}}))
			render 	json: {
							user: user_obj,
							notice: { info: "Your profile has been updated, #{ current_user.firstname.capitalize }" }
						}
		else
			render json: { errors: current_user.errors }, status: 200
		end
	end

	private

	def user_params
		params.require(:user).permit(:firstname ,:lastname ,:email, :email_confirmation ,:username ,:street_address ,:city ,:state ,:zip ,:country ,:lng ,:lat ,:password ,:password_confirmation, :provider, :uid, :oauth_token, :oauth_expires_at)
	end

end