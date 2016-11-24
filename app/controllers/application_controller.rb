class ApplicationController < ActionController::Base
	
  	protect_from_forgery with: :exception

  	serialization_scope :view_context

  	protected

	#returns the active user associated with the access token
	def current_user
		api_key = ApiKey.where(access_token: token).first
		if api_key
			return api_key.user
		else
			return nil
		end
	end

	# gets token from headers
	def token
		bearer = request.headers['HTTP_AUTHORIZATION']
		bearer ||= request.headers['rack.session'].try(:[], 'Authorization')
		if bearer.present?
			return bearer.split.last
		else
			return nil
		end
	end

	# is authenticated w. password or oauth
	def authenticated_confirmed?(password, oauth_token)
		if oauth_token
			oauth_token === current_user.oauth_token
		else 
			current_user.authenticate(password)
		end
	end

	#render 401 status if user is not authorized
	def ensure_authenticated_user
		head :unauthorized unless current_user
	end

	def render_notice(notice)
		render json: { notice: notice }, status: 200
	end

	helper_method :current_user

end
