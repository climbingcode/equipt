class OwnerSerializer < ActiveModel::Serializer
  	
    attributes 	:id, 
  				:firstname, 
  				:lastname, 
  				:email, 
  				:username, 
  				:home_phone, 
  				:cell_phone, 
  				:lng, 
  				:lat

end