class RatingSerializer < ActiveModel::Serializer

	include ActionView::Helpers::DateHelper

	attributes 	:comment,
				:score,
				:time_ago


	def time_ago
		time_ago_in_words( @object.created_at )
	end

end