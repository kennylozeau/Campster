class Api::CampsitesController < ApplicationController

  def index
    @campsites = Campsite.all
    render :index
  end

  def show
    @campsite = Campsite.find(params[:id])
    render :show
  end

  private
  def campsite_params
    params.require(:campsite).permit(
      :name,
      :description,
      :location,
      :latitude,
      :longitude,
      :price
    )
  end
end
