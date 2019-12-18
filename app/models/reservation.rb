# == Schema Information
#
# Table name: reservations
#
#  id          :bigint           not null, primary key
#  campsite_id :integer          not null
#  camper_id   :integer          not null
#  start_date  :date             not null
#  end_date    :date             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Reservation < ApplicationRecord

  validates :campsite_id, :camper_id, :start_date, :end_date, presence: true

  belongs_to :campsite,
    class_name: :Campsite,
    primary_key: :id,
    foreign_key: :campsite_id

  belongs_to :camper,
    class_name: :User,
    primary_key: :id,
    foreign_key: :camper_id

  has_many :reviews,
    class_name: :Review,
    primary_key: :id,
    foreign_key: :reservation_id

end
