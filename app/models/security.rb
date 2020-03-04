class Security < ApplicationRecord 

#  belongs_to :user, 
#    primary_key: :id,
#    foreign_key: :godsend_id,
#    class_name: :User 

has_many :watchlist_securities,
  primary_key: :id,
  foreign_key: :security_id,
  class_name: :WatchlistSecurity

end 