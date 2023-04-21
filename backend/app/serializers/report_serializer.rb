class ReportSerializer < ActiveModel::Serializer
  attributes :id,:description,:image,:video,:gps_coordinates, :title, :location_name, :created_at, :updated_at
  belongs_to :user
  belongs_to :report_status
  belongs_to :report_type
end
