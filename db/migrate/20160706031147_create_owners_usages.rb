class CreateOwnersUsages < ActiveRecord::Migration[5.0]
  def change
    create_table :owners_usages do |t|
    	t.references :equipment
    	t.date :start_date
    	t.date :end_date
    	t.timestamps
    end
  end
end
