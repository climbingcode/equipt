class EquipmentsSerializer < ActiveModel::Serializer

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
			    :primary_image

	def primary_image
		@object.images.first.file.url if @object.images.first
	end

end