class Watchlist < ApplicationRecord
  validates :godsend_id, :securities_id, presence: true 

  belongs_to :user, 
    primary_key: :id,
    foreign_key: :godsend_id,
    class_name: :User 

  belongs_to :security,
  primary_key: :id,
  foreign_key: :securities_id,
  class_name: :Security
end 


