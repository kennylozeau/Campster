# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Campsite.destroy_all
User.destroy_all

camp1 = Campsite.create!(
  name: "Brewster River Camping",
  description: "Riverside camping",
  latitude: 44.613609,
  longitude: -72.821579,
  location: "Stowe, Vermont",
  price: 30.00
)

camp2 = Campsite.create!(
  name: "Sleepy Pines",
  description: "Rural camping",
  latitude: 47.119029,
  longitude: 114.775278,
  location: "Lozeau, Montana",
  price: 17.50
)

camp3 = Campsite.create!(
  name: "Forest Lake Reserve",
  description: "Get lost in the wilderness that surrounds you!",
  latitude: 43.533547,
  longitude: -72.141985,
  location: "Grantham, New Hampshire",
  price: 1.0
)

camp4 = Campsite.create!(
  name: "Summit Overlook Park",
  description: "Beautiful views of peaks in the distance",
  latitude: 41.267211,
  longitude: -123.148286,
  location: "Sawyers Bar, California",
  price: 12.0
)

demo_user = User.create!(
  email: "kenny@kenny.com",
  first_name: "Kenny",
  last_name: "Lozeau",
  zip_code: 11237,
  password: "123456"
)