class User < ApplicationRecord
    has_many :reports

    has_secure_password
    validates :email, presence: true, uniqueness:  true
    validates :first_name, presence: true
    validates :surname,presence: true
end
