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
    			:rental_confirmed,
    			:created_at,
    			:updated_at,
    			:notice,
                :renter,
                :has_pasted

    belongs_to :equipment

    def renter
        RenterSerializer.new(@object.user, root: false) if @object.user
    end

    def has_pasted
        @object.pickup_date.past?
    end

    def notice
        equipment = object.equipment
    	{ info: "#{ equipment.equipment_name } has been rented" } if @instance_options[:create_notice]
        { info: "Rental of #{ equipment.equipment_name } has been canceled"} if @instance_options[:destroy_notice]
    end

    def self.collection_serialize(resources)
		ActiveModelSerializers::SerializableResource.new(resources, each_serializer: self)
	end

end
