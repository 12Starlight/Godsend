class DropSecurities < ActiveRecord::Migration[5.2]
  def change
    drop_table :securities
  end
end
