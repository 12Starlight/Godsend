class RemoveWatchlistIndexes < ActiveRecord::Migration[5.2]
  def change
    remove_index :watchlists, column: :company_name, unique: true 
    remove_index :watchlists, column: :securities_id, unique: true 
    remove_index :watchlists, column: :ticker, unique: true 
  end
end
