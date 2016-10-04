class AddSubCategoryToEquipment < ActiveRecord::Migration[5.0]
  def change
  	add_column :equipment, :sub_category, :string
  end
end
