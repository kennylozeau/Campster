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
  longitude: -114.775278,
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

camp5 = Campsite.create!(
  name: "StuyTown Tents",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.731147,
  longitude: -73.977182,
  location: "New York, NY",
  price: 12.0
)

camp6 = Campsite.create!(
  name: "App Academy",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.751323,
  longitude: -73.983933,
  location: "New York, NY",
  price: 12.0
)

camp7 = Campsite.create!(
  name: "Bryant Park",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.753758,
  longitude: -73.983579,
  location: "New York, NY",
  price: 12.0
)

camp8 = Campsite.create!(
  name: "Central Park South",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.768438,
  longitude: -73.977871,
  location: "New York, NY",
  price: 12.0
)

camp9 = Campsite.create!(
  name: "Central Park",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.773443,
  longitude: -73.973075,
  location: "New York, NY",
  price: 12.0
)

camp10 = Campsite.create!(
  name: "Central Park North",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.796658,
  longitude: -73.955811,
  location: "New York, NY",
  price: 12.0
)

camp11 = Campsite.create!(
  name: "Wyckoff Lofts",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.701938,
  longitude: -73.915087,
  location: "Brooklyn, NY",
  price: 12.0
)

camp12 = Campsite.create!(
  name: "Old Stanley's Camping",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.700970,
  longitude: -73.913875,
  location: "Brooklyn, NY",
  price: 12.0
)

camp13 = Campsite.create!(
  name: "Maria Hernandez Park",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.70272,
  longitude: -73.924625,
  location: "Brooklyn, NY",
  price: 12.0
)

camp14 = Campsite.create!(
  name: "Variety Coffee Camping",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.702809,
  longitude: -73.916936,
  location: "Brooklyn, NY",
  price: 12.0
)

camp15 = Campsite.create!(
  name: "Prospect Park North",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.670215,
  longitude: -73.969858,
  location: "Brooklyn, NY",
  price: 12.0
)

camp16 = Campsite.create!(
  name: "Duck Island",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.655851,
  longitude: -73.965041,
  location: "Brooklyn, NY",
  price: 12.0
)

camp17 = Campsite.create!(
  name: "Prospect Park South",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.651879,
  longitude: -73.971822,
  location: "Brooklyn, NY",
  price: 12.0
)

camp18 = Campsite.create!(
  name: "Governors Island",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.691998,
  longitude: -74.018321,
  location: "New York, NY",
  price: 12.0
)

camp19 = Campsite.create!(
  name: "Battery Park",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.703671,
  longitude: -74.017463,
  location: "New York, NY",
  price: 12.0
)

camp20 = Campsite.create!(
  name: "Eagle Rock Reservation",
  description: "Beautiful views of peaks in the distance",
  latitude: 40.808878,
  longitude: -74.239791,
  location: "West Orange, NJ",
  price: 12.0
)

demo_user = User.create!(
  email: "kenny@kenny.com",
  first_name: "Kenny",
  last_name: "Lozeau",
  zip_code: 11237,
  password: "123456"
)