class EquipmentSerializer < ActiveModel::Serializer

	attributes  :id, 
				:category,
			    :equipment_name,
			    :brand,
			    :model,
			    :description,
			    :age,
			    :price_per_day,
			    :price_per_week,
			    :desposit_amount,
			    :created_at,
			    :updated_at,
			    :sub_category,
			    :owner

	has_many :ratings
	has_many :rentals
	has_many :images

	def notice
		{ info: "#{ @object.equipment_name } was added to your inventory" } if @instance_options[:create_notice]
		{ info: "#{ @object.equipment_name } has been updated" } if @instance_options[:update_notice]
		{ info: "#{ @object.equipment_name } has been removed"} if @instance_options[:destroy_notice]
	end

	def owner
    	OwnerSerializer.new(@object.user, root: false) if @object.user
    end

    def age
    	return "#{ @object.years_old.humanize } years old" if @object.years_old > 1
    	return "one year old" if @object.years_old === 1
    end

    def self.collection_serialize(resources)
		ActiveModelSerializers::SerializableResource.new(resources, each_serializer: self)
	end

end