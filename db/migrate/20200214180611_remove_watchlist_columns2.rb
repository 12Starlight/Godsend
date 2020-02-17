class RemoveWatchlistColumns2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :watchlists, :company_name
    remove_column :watchlists, :ticker
  end
end
