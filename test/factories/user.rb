FactoryGirl.define do
  
  factory :user do
    firstname Faker::Name.first_name
    lastname Faker::Name.last_name
    email 'test@test.com'
    email_confirmation 'test@test.com'
    username Faker::Internet.user_name
    street_address Faker::Address.street_address
    city Faker::Address.city
    state Faker::Address.state
    zip Faker::Address.zip
    country Faker::Address.country
    lat Faker::Address.latitude
    lng Faker::Address.longitude
    restricted_availability [true, false].sample
    password 'password'
    password_confirmation 'password'
  end

end