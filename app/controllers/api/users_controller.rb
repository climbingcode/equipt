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
		render json: { user: current_user, api_key: current_user.session_api_key }, status: 200
	end

	private

	def user_params
		params.require(:user).permit(:firstname ,:lastname ,:email, :email_confirmation ,:username ,:street_address ,:city ,:state ,:zip ,:country ,:lng ,:lat ,:password ,:password_confirmation ,:restricted_availiability, :provider, :uid, :oauth_token, :oauth_expires_at)
	end

end