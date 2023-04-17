class CreateReports < ActiveRecord::Migration[7.0]
  def change
    create_table :reports do |t|
      t.string :description
      t.string :image
      t.string :video
      t.string :gps_coordinates
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :report_status, null: false, foreign_key: true
      t.belongs_to :report_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
