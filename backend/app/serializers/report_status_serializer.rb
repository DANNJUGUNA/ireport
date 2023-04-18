class ReportStatusSerializer < ActiveModel::Serializer
  attributes :id,:name
  has_many :reports
end
