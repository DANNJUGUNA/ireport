class UserSerializer < ActiveModel::Serializer
  attributes :id,:first_name,:surname,:email,:password_digest
  has_many :reports
end
