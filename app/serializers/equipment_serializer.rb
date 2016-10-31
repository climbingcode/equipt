class EquipmentSerializer < ActiveModel::Serializer

	attributes  :id, 
				:category,
			    :equipment_name,
			    :brand,
			    :model,
			    :description,
			    :years_old,
			    :price_per_day,
			    :price_per_week,
			    :desposit_amount,
			    :created_at,
			    :updated_at,
			    :sub_category,
			    :notice

	has_many :ratings
	has_many :rentals
	has_many :images 
	belongs_to :user

	def notice
		{ info: "#{ @object.equipment_name } was added to your inventory" } if @instance_options[:create_notice]
		{ info: "#{ @object.equipment_name } has been updated" } if @instance_options[:update_notice]
		{ info: "#{ @object.equipment_name } has been removed"} if @instance_options[:destroy_notice]
	end

end