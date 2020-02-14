class ChangeWatchlistsColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :watchlists, :name, :company_name
  end
end
