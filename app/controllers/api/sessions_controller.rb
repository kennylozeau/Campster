class Api::SessionsController < ApplicationController
  def create 
    @user = User.find_by_credentials(user_params[:email], user_params[:password])

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Wrong Username/Password Combo"], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: ["Logged out successfully"]
    else
      render json: ["You are not logged in"], status: 404
    end
  end

  private 
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
