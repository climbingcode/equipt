class SessionController < ApplicationController

	def create 
		render json: User.first
	end

end