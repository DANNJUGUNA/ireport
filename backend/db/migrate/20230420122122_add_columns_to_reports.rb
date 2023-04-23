class AddColumnsToReports < ActiveRecord::Migration[7.0]
  def change
    add_column :reports, :title, :string
    add_column :reports, :location_name, :string
    add_reference :reports, :report_status, null: false, foreign_key: true
  end
end
