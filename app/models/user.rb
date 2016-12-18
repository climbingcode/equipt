class User < ActiveRecord::Base 

	has_secure_password

  acts_as_mappable :default_units => :miles,
                   :default_formula => :sphere,
                   :distance_field_name => :distance,
                   :lat_column_name => :lat,
                   :lng_column_name => :lng

	validates :email, confirmation: true
  validates :email_confirmation, presence: true

	has_many :equipments, dependent: :destroy
	has_many :rentals, dependent: :destroy
  has_many :api_keys, dependent: :destroy
  has_many :availabilities, dependent: :destroy
  has_many :ratings, :as => :rateable, dependent: :destroy

  after_create :session_api_key

	# oAuth
	def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
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


  # Find all users in range

  def self.users_in_range location
    from = location['range']['from'].to_i
    to = location['range']['to'].to_i
    if from && to
      User.in_range(from..to, :origin => [ location[:lat], location[:lng] ])
    else 
      User.in_range(0..5, :origin => [ location[:lat], location[:lng] ])
    end
  end

  # helper methods

  def full_name
    "#{ self.firstname } #{ self.lastname }"
  end

end