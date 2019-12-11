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

require 'test_helper'

class CampsiteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
