class RemoveWatchlistsIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :watchlists, column: :godsend_id, unique: true 
  end
end
