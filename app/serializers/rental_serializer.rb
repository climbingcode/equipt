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
    			:updated_at

    belongs_to :equipment

end
