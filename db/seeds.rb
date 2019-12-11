# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Campsite.delete_all

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