class Watchlist < ApplicationRecord
  validates :godsend_id, presence: true 

  belongs_to :user, 
    primary_key: :id,
    foreign_key: :godsend_id,
    class_name: :User 

  #has_many :securities
end 