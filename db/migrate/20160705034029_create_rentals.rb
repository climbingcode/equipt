class CreateRentals < ActiveRecord::Migration[5.0]
  def change
    create_table :rentals do |t|
      t.references :equipment, foreign_key: true
      t.references :user, foreign_key: true
      t.date :pickup_date
      t.date :dropoff_date
      t.float :pick_up_time
      t.float :sub_total
      t.float :rental_deposit, default: 0 
      t.float :rental_total
      t.integer :total_rental_days
      t.boolean :rental_completed, default: false
      t.boolean :rental_comfirmed, default: false
      t.timestamps
    end
  end
end
