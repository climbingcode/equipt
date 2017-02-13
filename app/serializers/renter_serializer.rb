class RenterSerializer < ActiveModel::Serializer

    attributes 	:firstname, 
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
				:lat 

end