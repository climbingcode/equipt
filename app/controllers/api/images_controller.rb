class Api::ImagesController < ApplicationController 

	protect_from_forgery with: :exception

	before_filter :ensure_authenticated_user

	def create

		images = params[:images]
		klass  = params[:className].capitalize.constantize

		images.each do |image|
			klass.find(params[:instanceId]).images.create(file: image)
		end

	end
	
end