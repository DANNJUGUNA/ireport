class Report < ApplicationRecord
  belongs_to :user
  belongs_to :report_type
  belongs_to :status_type
  
  has_many_attached :images
  
  validates :description, :gps_coordinates, presence: true
end
