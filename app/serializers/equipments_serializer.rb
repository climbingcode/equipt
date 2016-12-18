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
			    :primary_image,
			    :review_score

	def primary_image
		@object.images.first.file.url if @object.images.first
	end

	def notice
		{ pages: @object.pages } if @instance_options[:pages]
	end

	def review_score
		@object.ratings.average(:score)
	end

	def self.collection_serialize(resources)
		ActiveModelSerializers::SerializableResource.new(resources, each_serializer: self)
	end

end