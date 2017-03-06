class Api::ImagesController < ApplicationController 

	protect_from_forgery with: :exception

	before_action :ensure_authenticated_user

	def destroy 

	end
	
end