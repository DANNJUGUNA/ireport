class User < ApplicationRecord
    has_many :reports
    validates :email, presence: true, uniqueness:  true
    validates :first_name, presence: true
    validates :surname,presence: true
end
