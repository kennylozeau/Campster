# == Schema Information
#
# Table name: reviews
#
#  id             :bigint           not null, primary key
#  campsite_id    :integer          not null
#  reservation_id :integer          not null
#  title          :string           not null
#  body           :string
#  rating         :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#



class Review < ApplicationRecord

  validates :campsite_id, :reservation_id, :title, :rating, presence: true

  belongs_to :campsite,
    class_name: :Campsite,
    primary_key: :id,
    foreign_key: :campsite_id

  belongs_to :reservation,
    class_name: :Reservation,
    primary_key: :id,
    foreign_key: :reservation_id

end
