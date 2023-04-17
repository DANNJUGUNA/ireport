class Report < ApplicationRecord
  belongs_to :status
  belongs_to :user
  belongs_to :report_type
end
