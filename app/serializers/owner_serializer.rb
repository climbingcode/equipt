class OwnerSerializer < ActiveModel::Serializer
  	
    attributes 	:id, 
  				:firstname, 
  				:lastname, 
  				:email, 
  				:username, 
  				:home_phone, 
  				:cell_phone, 
  				:lng, 
  				:lat,
          :review_score
      
    has_many :ratings

    def review_score
      @object.ratings.average(:score)
    end

end