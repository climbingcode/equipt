require 'test_helper'

class EquipmentTest < ActiveSupport::TestCase

  	def setup 
	  	@current_user 	 = create(:user, lat: 49.25, lng: -123.1333333)
	  	@user 			 = create(:user, lat: 45.1, lng: -63.6)
	  	@api_key 		 = create(:api_key, user: @user)
	  	@equipment_one 	 = create(:equipment, user: @current_user, sub_category: 'snowboard', equipment_name: 'vans, shoe size 13')
	  	@equipment_two   = create(:equipment, user: @current_user)
	  	@equipment_three = create(:equipment, user: @user)
	  	@equipment_four  = create(:equipment, user: @user, sub_category: 'snowboard')
	  	@equipment_five  = create(:equipment, user: @user, category: 'snow', sub_category: 'snowboard', equipment_name: 'bindings and straps')
	  	@equipment_six   = create(:equipment, user: @user, category: 'snow')
	  	@rental_one		 = create(:rental, equipment: @equipment_four, user: @user, pickup_date: '16/11/17', dropoff_date: '16/11/21' ) # not available
	  	@rental_two		 = create(:rental, equipment: @equipment_two, user: @user, pickup_date: '16/11/20', dropoff_date: '16/11/25')
	  	@rental_three	 = create(:rental, equipment: @equipment_four, user: @user, pickup_date: '16/11/15', dropoff_date: '16/11/19') # not available
	  	@rental_four	 = create(:rental, equipment: @equipment_three, user: @user, pickup_date: '16/11/09', dropoff_date: '16/11/12')
	end

	test "does not allow current_user equipment to be returned" do
		assert_equal [ @equipment_three, @equipment_four, @equipment_five, @equipment_six ], Equipment.exclude_user(@current_user)
	end

	test "search_category return all with the same category" do 
		assert_equal [ @equipment_five, @equipment_six ], Equipment.search({ category: 'snow' })
	end

	test "search sub category return all of the same sub category" do
		assert_equal [ @equipment_one, @equipment_four, @equipment_five ], Equipment.search({ sub_category: 'snowboard' })
	end 

	test "search equipment_name will return all like query" do
		assert_equal [ @equipment_one, @equipment_five ], Equipment.search({ fuzzy_search: 'an'})
	end

	test "search equipment_name will not return all like query" do
		assert_not_equal  [ @equipment_one, @equipment_five ], Equipment.search({ fuzzy_search: 'low'})
	end

	test "search dates will return equipment availiable during dates" do
		assert_equal [ 	@equipment_two, @equipment_three ], Equipment.search({
			dates: {
				pickup: '16/11/15',
				dropoff: '16/11/19'
			}
		})
	end

	test "search dates will not return equipment not availiable during dates" do
		assert_not_equal [ @equipment_four ], Equipment.search({
			dates: {
				pickup: '16/11/15',
				dropoff: '16/11/19'
			}
		})
	end

	test "search location within 5km of equipments returned" do
		assert_equal [ 	
							@equipment_three, 
							@equipment_four, 
							@equipment_five, 
							@equipment_six  
						], 
		Equipment.search({
			location: {
				lat: 44.66,
				lng: -63.56
			}
		})
	end

end