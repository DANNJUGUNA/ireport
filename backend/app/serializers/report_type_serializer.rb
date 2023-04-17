class ReportTypeSerializer < ActiveModel::Serializer
  attributes :id,:name
  has_many :reports
end
