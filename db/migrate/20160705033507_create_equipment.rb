class CreateEquipment < ActiveRecord::Migration[5.0]
  def change
    create_table :equipment do |t|
      t.string :category
      t.references :user, foreign_key: true
      t.string :equipment_name
      t.string :brand
      t.string :model
      t.text :description
      t.integer :years_old
      t.float :price_per_day
      t.float :price_per_week
      t.float :desposit_amount, default: 0
      t.timestamps
    end
  end
end
