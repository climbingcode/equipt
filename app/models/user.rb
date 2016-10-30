class User < ActiveRecord::Base 

	has_secure_password

	validates :email, confirmation: true
  validates :email_confirmation, presence: true

	has_many :equipments
	has_many :rentals
  has_many :api_keys
  has_many :availabilities
  has_many :ratings, :as => :rateable

  after_create :session_api_key

	# oAuth
	def self.from_omniauth(auth)
    where(auth.slice(provider: auth.provider, uid: auth.uid)).first_or_initialize.tap do |user|
  		user.provider           = auth.provider
  		user.uid                = auth.uid
  		user.firstname          = auth.info.name
      user.email              = auth.info.email
      user.email_confirmation = auth.info.email
  		user.oauth_token        = auth.credentials.token
  		user.oauth_expires_at   = Time.at(auth.credentials.expires_at)
      user.password           = SecureRandom.hex(9)
  		user.save!
		end
	end

  def session_api_key
    api_keys.first_or_create
  end

  # forgot password

  def send_password_reset
    generate_token(:password_reset_token)
    self.password_reset_sent_at = Time.zone.now
    save!
    UserMailer.password_reset(self).deliver
  end

  def generate_token(column)
    begin
      self[column] = SecureRandom.urlsafe_base64
    end while User.exists?(column => self[column])
  end

  # Set Availability 

  def save_availabilities(availabilities)
    if availabilities.length > 0 
      self.restricted_availability = true
      self.availabilities.delete_all
      Availability.add_availabilities(availabilities, self)
    else 
      self.restricted_availability = false
    end
  end

end