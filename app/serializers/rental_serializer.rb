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
    			:notice

    belongs_to :equipment

    def notice 
    	{ info: "#{ @object.equipment.equipment_name } has been rented" } if @instance_options[:create_notice]
    end

    def self.collection_serialize(resources)
		ActiveModelSerializers::SerializableResource.new(resources, each_serializer: self)
	end

	def notice
		{ info: "#{ @object.equipment.equipment_name } rental has been canceled, #{ @object.user.firstname.capitalize } has been notified" } if @instance_options[:destroyed_by_owner_notice]
  		{ info: "Rental of#{ @object.equipment.equipment_name } has been canceled. The owner has been notified" } if @instance_options[:destroy_notice]
  	end

end
