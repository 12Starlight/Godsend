class CreateWatchlists < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlists do |t|
      t.integer :godsend_id, null: false
      t.integer :securities_id 
      t.string :name, null: false 
      t.string :ticker
      
      t.timestamps
    end

    add_index :watchlists, :name, unique: true 
    add_index :watchlists, :godsend_id, unique: true
    add_index :watchlists, :securities_id, unique: true  
    add_index :watchlists, :ticker, unique: true 
  end
end
