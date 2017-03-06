class DeleteOwnersUsagesTable < ActiveRecord::Migration[5.0]
  def change
  	drop_table :owners_usages
  end
end
