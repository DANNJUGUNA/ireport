class Admin < ApplicationRecord
    validates :email, presence: true, uniqueness:  true
    validates :first_name, presence: true
    validates :surname,presence: true
end
