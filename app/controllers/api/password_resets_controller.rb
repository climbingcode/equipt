class Api::PasswordResetsController < ApplicationController
	
	def create
  		user = User.find_by_email(params[:email])
      user.email_confirmation = params[:email_confirmation] if user
  		user.send_password_reset if user
  		render json: { notice: { info: "Email sent with password reset instructions to #{params[:email]}." } }
	end

	def update
  		user = User.find_by_password_reset_token(params[:reset_token])
      if !user
        render json: { notice: { error: "Our bad! Please try again" } }
  		elsif user.password_reset_sent_at < 2.hours.ago
  			render json: { notice: { error: "Password reset has expired." } }
  		elsif user.update_attribute('password', params[:password])
  			render json: { notice: { info: "Password has been reset!" } }
  	 else 
        render json: { notice: { error: user.errors } }
     end
	end

end
