class Watchlist < ApplicationRecord
  validates :name, presence: true; 

  has_many :securites
end 