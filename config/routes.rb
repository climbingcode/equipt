Rails.application.routes.draw do
	
  get 'password_resets/new'

	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	namespace :api do
		
		resources :users

		resources :images

		resources :rentals, only: ['index']
		
		resources :equipments do 
			resources :rentals
		end
		
		namespace :owner do 
			resources :equipments
		end

		resources :session, only: ['create', 'destroy']

		resources :password_resets
		
	end

	match '/api/current_user', to: 'api/users#show', via: 'GET'
	match '/', to: 'home#index', via: 'GET'
	match '*path', to: 'home#index', via: 'GET'

	match 'auth/:provider/callback', to: 'api/session#facebook_auth', via: 'POST'
	match 'api/users/:id/add_availabilities', to: 'api/availability#add_availabilities', via: 'POST'

end
