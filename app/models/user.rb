class User < ApplicationRecord 
  validates :first_name, :last_name, :username, :email, :password_digest, :session_token, presence: true 
  validates :password, length:  { minimum: 6,  allow_nil: true }

  attr_reader :password 
  after_initialize :ensure_session_token 

  # Associations
  has_many :watchlist_securities,
    primary_key: :id,
    foreign_key: :godsend_id,
    class_name: :WatchlistSecurity 
    
#  has_many :securities,
#    primary_key: :id,
#    foreign_key: :godsend_id,
#    class_name: :Security 

  # Main Methods
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil 
  end
  
  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save! # returns true if successful, raises an error if not
    self.session_token 
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end 