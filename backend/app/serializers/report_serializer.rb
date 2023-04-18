class ReportSerializer < ActiveModel::Serializer
  attributes :id,:description,:image,:video,:gps_coordinates,:user_id,:report_type_id,:report_status_id
  belongs_to :user
  belongs_to :report_status
  belongs_to :report_type
end
