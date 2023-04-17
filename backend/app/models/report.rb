class Report < ApplicationRecord
  belongs_to :user
  belongs_to :report_status
  belongs_to :report_type
end
