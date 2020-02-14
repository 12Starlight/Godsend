class RenameOldTableToNewTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :watchlists, :watchlist_securitites
  end
end
