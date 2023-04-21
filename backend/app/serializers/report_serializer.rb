class ReportSerializer < ActiveModel::Serializer
  attributes :id,:description,:image,:video,:gps_coordinates, :title, :location_name, :created_at, :updated_at, :title_summary, :description_summary
  belongs_to :user
  belongs_to :report_status
  belongs_to :report_type

  def title_summary
	  "#{self.object.title[0..20]}..."
	end

  def description_summary
	  "#{self.object.description[0..20]}..."
	end

end
