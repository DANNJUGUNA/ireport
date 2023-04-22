class ReportSerializer < ActiveModel::Serializer
  attributes :id,:description,:image,:video,:gps_coordinates, :title, :location_name, :created_at, :updated_at, :description_summary, :title_summary

  def description_summary
    "#{self.object.description[0..25]}..."
  end
  def title_summary
    "#{self.object.title[0..25]}..."
  end

  belongs_to :user
  belongs_to :report_status
  belongs_to :report_type
end
