FactoryGirl.define do
  
	factory :equipment do
		category 'bike'
		sub_category 'road bike'
		equipment_name 'flow bindings'
		brand Faker::Commerce.product_name
		model Faker::Commerce.product_name
		description Faker::Lorem.paragraph(2)
		years_old (1..10).to_a.sample
		price_per_day (1..50).to_a.sample
		price_per_week (50..200).to_a.sample
		desposit_amount (10..100).to_a.sample
  	end

end