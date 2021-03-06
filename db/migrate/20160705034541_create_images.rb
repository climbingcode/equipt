class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.integer :imageable_id
      t.string :imageable_type
      t.string :file
      t.boolean :primary, default: true
      t.timestamps
    end
  end
end
