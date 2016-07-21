# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
ActiveRecord::Base.establish_connection
ActiveRecord::Base.connection.tables.each do |table|
   ActiveRecord::Base.connection.execute("DELETE FROM #{table}") unless table == "schema_migrations"
end

# admin account

User.create(
	firstname: 'tom',
	lastname: 'tom',
	email: 'tom@tom.com',
	email_confirmation: 'tom@tom.com',
	username: 'tommy',
	street_address: '123 fake street',
	city: 'Vancouver',
	state: 'BC',
	zip: '10002',
	country: 'Canada',
	lat: '11222',
	lng: '12222',
	restricted_availiability: [true, false].sample,
	password: 'tom',
	password_confirmation: 'tom'
)



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
		email = Faker::Internet.email

		user = 	User.create(
			firstname: Faker::Name.first_name,
			lastname: Faker::Name.last_name,
			email: email,
			email_confirmation: email,
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

		5.times do |i|
			create_equipment(user) if user.save!
			create_ratings(user) if user.save!
		end

	end

end

def create_equipment(user)

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

		5.times do |i|
			create_rentals(equipment, user) if equipment.save!
			create_ratings(equipment) if equipment.save!
		end

	end

end

def create_rentals(equipment, user)

	rentals_amount = (1..5).to_a.sample

	rentals_amount.times do |i|

		rental = equipment.rentals.create(
			user_id: user.id,
			pickup_date: Faker::Date.backward(10),
			dropoff_date: Faker::Date.forward(5),
			pick_up_time: (6..22).to_a.sample,
			rental_total: (20..500).to_a.sample,
			rental_deposit: (10..100).to_a.sample,
			rental_completed: [true, false].sample
		)

	end

end

def create_ratings(model)
	model.ratings.create(
		score: (1..5).to_a.sample,
		comment: Faker::Lorem.sentence(3)
	)
end

create_users

