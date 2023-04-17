class CreateReports < ActiveRecord::Migration[7.0]
  def change
    create_table :reports do |t|
      t.text :description
      t.string :image_url
      t.string :video_url
      t.string :gps_coordinates
      t.references :status, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.references :report_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
