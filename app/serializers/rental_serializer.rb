class RentalSerializer < ActiveModel::Serializer
	
	attributes 	:id, 
				:pickup_date, 
				:dropoff_date, 
				:pick_up_time,
				:sub_total,
				:rental_deposit,
				:rental_total,
    			:total_rental_days,
    			:rental_completed,
    			:rental_comfirmed,
    			:created_at,
    			:updated_at,
    			:owner

    belongs_to :equipment

    def owner
    	OwnerSerializer.new(@object.equipment.user, root: false)
    end

end
