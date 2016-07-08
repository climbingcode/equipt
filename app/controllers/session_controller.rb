class SessionController < ApplicationController

	def create 
		binding.pry
		render json: User.first
	end

end