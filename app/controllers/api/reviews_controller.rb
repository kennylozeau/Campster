class Api::ReviewsController < ApplicationController

  def create
    reservation = Reservation.find(params[:reservation_id])
    debugger
    @review = reservation.reviews.new(review_params)

    if @review.save
      render json: {message: "success"}
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  private

  def review_params
    params.require(:review).permit(:campsite_id, :title, :body, :rating)
  end

end
