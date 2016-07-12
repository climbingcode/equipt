class User < ActiveRecord::Base 

	has_secure_password

	validates :email, confirmation: true
  validates :email_confirmation, presence: true

	has_many :equipments
	has_many :rentals
  has_many :api_keys

	# oAuth
	def self.from_omniauth(auth)
    where(auth.slice(provider: auth.provider, uid: auth.uid)).first_or_initialize.tap do |user|
  		user.provider = auth.provider
  		user.uid = auth.uid
  		user.firstname = auth.info.name
      user.email = auth.info.email
      user.email_confirmation = auth.info.email
  		user.oauth_token = auth.credentials.token
  		user.oauth_expires_at = Time.at(auth.credentials.expires_at)
  		user.save!
		end
	end

  def session_api_key
    api_keys.first_or_create
  end

end