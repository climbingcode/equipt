class Api::UsersController < ApplicationController

	protect_from_forgery with: :exception

	before_filter :ensure_authenticated_user, except: [:create]

	def create
		user = User.new(user_params)
		if user.save
			render json: user, create_notice: true, send_api_token: true, status: 200
		else
			render json: { errors: user.errors }, status: 200
		end
	end

	def show
		render json: current_user, create_notice: true, send_api_token: true, status: 200
	end

	def update
		if !current_user.authenticate(user_params[:password]) 
			render_notice({ error: "Incorrect credentials, try again!" })
		elsif current_user.update(user_params)
			current_user.save_availabilities(params[:user][:availability])
			render json: current_user, send_api_token: true, status: 200
		else
			render json: { errors: current_user.errors }, status: 200
		end
	end

	private

	def user_params
		params.require(:user).permit(:firstname ,:lastname ,:email, :email_confirmation ,:username ,:street_address ,:city ,:state ,:zip ,:country ,:lng ,:lat ,:password ,:password_confirmation, :provider, :uid, :oauth_token, :oauth_expires_at)
	end

end