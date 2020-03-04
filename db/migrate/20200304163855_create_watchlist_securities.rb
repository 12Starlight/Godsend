class CreateWatchlistSecurities < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlist_securities do |t|
      t.integer :godsend_id, null: false
      t.integer :security_id

      t.timestamps
    end

    add_index :watchlist_securities, :godsend_id
    add_index :watchlist_securities, :security_id 
  end
end
