class CreateRentals < ActiveRecord::Migration[5.0]
  def change
    create_table :rentals do |t|
      t.references :equipment, foreign_key: true
      t.references :user, foreign_key: true
      t.date :pickup_date
      t.date :dropoff_date
      t.float :pick_up_time
      t.float :rental_total
      t.float :rental_deposit
      t.boolean :rental_returned
      t.timestamps
    end
  end
end
