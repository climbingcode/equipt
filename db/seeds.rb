# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
ActiveRecord::Base.establish_connection
ActiveRecord::Base.connection.tables.each do |table|
   ActiveRecord::Base.connection.execute("DELETE FROM #{table}") unless table == "schema_migrations"
end

@rentable_equipment_amount = (1..5).to_a
@equipment_category = [
	{camp: [
		'tent',
		'stove',
		'sleeping pad',
		'backpack'
	]}, 
	{lake: [
		'kayak',
		'paddle board',
		'surf board',
		'canoe'
	]}, 
	{bike: [
		'mountain bike',
		'road bike',
		'childrens trailer'
	]},
	{snow: [
		'snowboard',
		'skies',
		'helmet'
	]}
]


def create_users

	5.times do |i|

		# Create Users
		user = 	User.create(
			firstname: Faker::Name.first_name,
			lastname: Faker::Name.last_name,
			email: Faker::Internet.email,
			username: Faker::Internet.user_name,
			street_address: Faker::Address.street_address,
			city: Faker::Address.city,
			state: Faker::Address.state,
			zip: Faker::Address.zip,
			country: Faker::Address.country,
			lat: Faker::Address.latitude,
			lng: Faker::Address.longitude,
			restricted_availiability: [true, false].sample,
			password: 'password',
			password_confirmation: 'password'
		)

		create_equipments(user)

	end

end

def create_equipments(user)

	@rentable_equipment_amount.sample.times do |i|

		category = @equipment_category.sample
		key = category.keys[0]

		equipment = user.equipments.create(
			category: key.to_s,
			equipment_name: category[key].sample,
			brand: Faker::Commerce.product_name,
			model: Faker::Commerce.product_name,
			description: Faker::Lorem.paragraph(2),
			years_old: (1..10).to_a.sample,
			price_per_day: (1..50).to_a.sample,
			price_per_week: (50..200).to_a.sample,
			desposit_amount: (10..100).to_a.sample
		)

		create_rentals(equipment, user)

	end

end

def create_rentals(equipment, user)

	rentals_amount = (1..5).to_a.sample

	rentals_amount.times do |i|

		equipment.rentals.create(
			user_id: user.id,
			pickup_date: Faker::Date.backward(20),
			dropoff_date: Faker::Date.forward(20),
			pick_up_time: (6..22).to_a.sample,
			rental_total: (20..500).to_a.sample,
			rental_deposit: (10..100).to_a.sample,
			rental_completed: [true, false].sample
		)

	end

end

create_users

