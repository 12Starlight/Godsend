class AddWatchListIndexes < ActiveRecord::Migration[5.2]
  def change
    add_index :watchlists, :company_name, unique: true
    add_index :watchlists, :ticker, unique: true 
    add_index :watchlists, :godsend_id
    add_index :watchlists, :securities_id
  end
end
