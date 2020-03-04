class CreateSecurities < ActiveRecord::Migration[5.2]
  def change
    create_table :securities do |t|
      t.string :company_name, null: false
      t.string :ticker, null: false 
      
      t.timestamps
    end

    add_index :securities, :company_name
    add_index :securities, :ticker, unique: true 
  end
end
