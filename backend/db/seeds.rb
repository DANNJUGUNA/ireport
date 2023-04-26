# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Admin users
Admin.create(first_name: "Admin", surname: "User", email: "admin@example.com", password: "password_digest")

# Report types
ReportType.create(name: "Red Flag")
ReportType.create(name: "Intervention")


# Report statuses
ReportStatus.create(name: "Pending Review")
ReportStatus.create(name: "Under Investigation")
ReportStatus.create(name: "Resolved")
ReportStatus.create(name: "Rejected")

# Users
User.create(first_name: "Dan", surname: "Njuguna", email: "dan@gmail.com", password: "password")
User.create(first_name: "Jay", surname: "Felix", email: "jay@gmail.com", password: "password")

# Reports
Report.create(
  title: "Policeman demanding bribes to enter town CBD",
  description: "For a long time, traffic police around the Nakuru round-about have been demanding bribes in order to cross into town. They look for all manner of mistakes in your vehicle in attempt to corner you. ", 
  image: "https://postamate.com/wp-content/uploads/2021/07/Corrupt-police.jpg", 
  video: "https://example.com/car-accident.mp4",
  location_name: "Thika Road Area", 
  gps_coordinates: "-1.2845056, 36.8345088", 
  user_id: 1, 
  report_status_id: 2, 
  report_type_id: 1)

Report.create(
  title: "Murders, muggings and theft",
  description: "On the same Sunday that Githua was killed, Ms Jacqueline Jeruto, an advocate, watched helplessly as her mobile phone was snatched as she was driving on Chiromo Road. The car’s window had been lowered.", 
  image: "https://postamate.com/wp-content/uploads/2021/07/Corrupt-police.jpg", 
  video: "https://example.com/car-accident.mp4",
  location_name: "Nakuru, CBD", 
  gps_coordinates: "-0.2802724, 36.0712048", 
  user_id: 2, 
  report_status_id: 1, 
  report_type_id: 2)

Report.create(
  title: "Underfunded Fire Brigade",
  description: "We Kenya National Fire Brigade Association propose that the management be taken up especially by the Office of the President so that the county is only left with employment", 
  image: "https://postamate.com/wp-content/uploads/2021/07/Corrupt-police.jpg", 
  video: "https://example.com/car-accident.mp4",
  location_name: "Voi, Birikani, Taita–Taveta, Kenya", 
  gps_coordinates: "-1.2845056, 36.8345088", 
  user_id: 1, 
  report_status_id: 3, 
  report_type_id: 1)
  
Report.create(
  title: "Unfair Justice",
  description: "Since when does the law serve the highest bidder. This judge only sways the courts decision depending on how much money you can offer her. This is outrageous!", 
  image: "https://mg.co.za/wp-content/uploads/2019/02/175c631f-corruption-trial-of-senior-kenyan-judge-suspended.jpeg", 
  video: "https://example.com/car-accident.mp4",
  location_name: "Nakuru Law Courts", 
  gps_coordinates: "-0.287857, 36.0694383", 
  user_id: 2, 
  report_status_id: 4, 
  report_type_id: 2)