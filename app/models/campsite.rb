# == Schema Information
#
# Table name: campsites
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  location    :string           not null
#  latitude    :float            not null
#  longitude   :float            not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Campsite < ApplicationRecord

  validates :name, :description, :location, :latitude, :longitude, :price, presence: true

  has_many_attached :photos

  has_many :reservations,
    class_name: :Reservation,
    primary_key: :id,
    foreign_key: :campsite_id

  has_many :reviews,
    class_name: :Review,
    primary_key: :id,
    foreign_key: :campsite_id

  def self.in_bounds(bounds)
    # debugger
    self.where("latitude < ?", bounds[:northEast][:lat])
      .where("latitude > ?", bounds[:southWest][:lat])
      .where("longitude > ?", bounds[:southWest][:lng])
      .where("longitude < ?", bounds[:northEast][:lng])
  end

end
