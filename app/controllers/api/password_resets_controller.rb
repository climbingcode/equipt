class Api::PasswordResetsController < ApplicationController
	
	def create
  		user = User.find_by_email(params[:email])
      user.email_confirmation = params[:email_confirmation] if user
  		user.send_password_reset if user
  		render json: { notice: { info: "Email sent with password reset instructions to #{params[:email]}." } }
	end

	def edit
  		user = User.find_by_password_reset_token!(params[:id])
	end

	def update
  		user = User.find_by_password_reset_token!(params[:id])
  		if user.password_reset_sent_at < 2.hours.ago
  			render json: { notice: { error: "Password reset has expired." } }
  		elsif user.update_attributes(params[:user])
  			render json: { notice: { info: "Password has been reset!" } }
  		end
	end

end
