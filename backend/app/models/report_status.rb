class ReportStatus < ApplicationRecord
    has_many :reports
    validates :name, presence: true, uniqueness:  true
end
