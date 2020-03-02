class Security < ApplicationRecord 

  belongs_to :watchlist

  belongs_to :user, 
  primary_key: :id,
  foreign_key: :godsend_id,
  class_name: :User 

end 