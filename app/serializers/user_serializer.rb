class UserSerializer < ActiveModel::Serializer
  	attributes 	:id, 
  				:firstname, 
  				:lastname, 
  				:firstname, 
  				:lastname, 
  				:email, 
  				:username, 
  				:street_address, 
  				:city, 
  				:state, 
  				:zip, 
  				:country, 
  				:home_phone, 
  				:cell_phone, 
  				:lng, 
  				:lat, 
  				:restricted_availability, 
  				:created_at, 
  				:updated_at, 
  				:provider, 
  				:uid, 
  				:oauth_token, 
  				:oauth_expires_at, 
  				:password_reset_token, 
  				:password_reset_sent_at,
  				:notice,
          :api_key

  	def notice
  		{ info: "Welcome, #{ @object.firstname.capitalize }" } if @instance_options[:create_notice]
  	end

    def api_key
      @object.api_keys.first.access_token if @instance_options[:send_api_token]
    end

  	private

  	def availabilities
  		scope.availabilities.pluck(:hour)
  	end
end

