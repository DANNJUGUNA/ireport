# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Admin users
Admin.create(first_name: "Admin", surname: "User", email: "admin@example.com", password_digest: "password_digest")

# Report types
ReportType.create(name: "RedFlag")
ReportType.create(name: "Intervention")


# Report statuses
ReportStatus.create(name: "Investigation")
ReportStatus.create(name: "Rejected")
ReportStatus.create(name: "Resolved")

# Users
User.create(first_name: "John", surname: "Doe", email: "johndoe@example.com", password_digest: "password_digest")
User.create(first_name: "Jane", surname: "Doe", email: "janedoe@example.com", password_digest: "password_digest")

# Reports
Report.create(description: "Car accident on Main Street", image: "https://example.com/car-accident.jpg", video: "https://example.com/car-accident.mp4", gps_coordinates: "37.7749° N, 122.4194° W", user_id: 1, report_status_id: 1, report_type_id: 1)
Report.create(description: "Theft at convenience store", image: "https://example.com/theft.jpg", gps_coordinates: "37.7749° N, 122.4194° W", user_id: 2, report_status_id: 1, report_type_id: 2)
Report.create(description: "House fire on Elm Street", image: "https://example.com/house-fire.jpg", video: "https://example.com/house-fire.mp4", gps_coordinates: "37.7749° N, 122.4194° W", user_id: 1, report_status_id: 2, report_type_id: 3)
