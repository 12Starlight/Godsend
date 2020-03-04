class WatchlistSecurity < ApplicationRecord
  validates :godsend_id, :security_id, presence: true 

  belongs_to :user, 
  primary_key: :id,
  foreign_key: :godsend_id,
  class_name: :User 

  belongs_to :security,
  primary_key: :id,
  foreign_key: :security_id,
  class_name: :Security
end 


