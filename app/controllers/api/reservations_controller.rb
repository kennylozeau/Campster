class Api::ReservationsController < ApplicationController

  def index
    @reservations = Reservation.all
    render :index
  end

  def create
    @reservation = Reservation.new(reservation_params)

    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def update
    @reservation = Reservation.find(params[:id])
    if @reservation.update(reservation_params)
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    @reservation.destroy
    render json: ["Reservation canceled"]
  end

  private
  def reservation_params
    params.require(:reservation).permit(:campsite_id, :camper_id, :start_date, :end_date)
  end
end
