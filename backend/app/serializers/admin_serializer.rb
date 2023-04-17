class AdminSerializer < ActiveModel::Serializer
  attributes :id,:first_name,:surname,:email,:password_digest
end
