class Api::UsersController < ApplicationController

  def show
    @user = User.includes(:reviews).find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :zip_code)
  end
end
