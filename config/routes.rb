Rails.application.routes.draw do
	
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

	match 'auth/:provider/callback', to: 'session#facebook_auth', via: 'POST'

	resources :users
	resources :session, only: ['create', 'destroy']
	resources :equipments, defaults: {format: :json}

	match '/', to: 'home#index', via: 'GET'
	match '/:path', to: 'home#index', via: 'GET'

end
