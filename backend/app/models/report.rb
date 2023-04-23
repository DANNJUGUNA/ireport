class Report < ApplicationRecord
  belongs_to :user
  belongs_to :report_status
  belongs_to :report_type
  validates :title, :description, :location_name, presence: true

  validate :can_be_updated_by_current_user

  private

  def can_be_updated_by_current_user
    if !user_id.eql?(current_user.id) && !current_user.admin?
      errors.add(:base, "You can't update this report")
    end
  end
end
