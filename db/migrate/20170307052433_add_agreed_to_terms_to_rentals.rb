class AddAgreedToTermsToRentals < ActiveRecord::Migration[5.0]
  def change
  	add_column :rentals, :agreed_to_terms, :boolean, default: false
  end
end
