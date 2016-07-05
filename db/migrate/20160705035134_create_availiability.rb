class CreateAvailiability < ActiveRecord::Migration[5.0]
  def change
    create_table :availiabilities do |t|
      t.references :user, foreign_key: true
      t.string :weekday
      t.integer :hour
    end
  end
end
