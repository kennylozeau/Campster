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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
