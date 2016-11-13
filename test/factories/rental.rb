FactoryGirl.define do
  
	factory :rental do
	  	pickup_date '16/11/20'
	    dropoff_date '16/11/25'
	    pick_up_time 13
	    sub_total 50
	    rental_deposit 50
	    rental_total 200
	    total_rental_days 3
  	end

end