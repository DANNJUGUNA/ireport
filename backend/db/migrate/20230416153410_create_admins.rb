class CreateAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :admins do |t|
      t.string :first_name
      t.string :surname
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
