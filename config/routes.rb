Rails.application.routes.draw do
	
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

	match 'api/auth/:provider/callback', to: 'api/session#facebook_auth', via: 'POST'

	namespace :api do
		resources :users, :equipments
		resources :session, only: ['create', 'destroy']
	end

	match '/', to: 'home#index', via: 'GET'
	match '*path', to: 'home#index', via: 'GET'

end
