class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)

    if @review.save
      render json: {message: "success"}
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  private

  def review_params
    params.require(:review).permit(:campsite_id, :reservation_id, :title, :body, :rating)
  end

end
