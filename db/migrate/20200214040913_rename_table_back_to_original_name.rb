class RenameTableBackToOriginalName < ActiveRecord::Migration[5.2]
  def change
    rename_table :watchlist_securitites, :watchlists 
  end
end
