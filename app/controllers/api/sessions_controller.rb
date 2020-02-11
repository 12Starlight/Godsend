class Api::SessionsController < ApplicationController
  def new
    render :new 
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username], 
      params[:user][:password]
    )
    if @user.nil?
      render json: ['Incorrect password and or username'], status: 401
    else
      login!(@user)
      # redirect_to user_url(@user)
      render 'api/users/show'
    end
  end

  def destroy
    @user = current_user

    if @user 
      logout!
      render 'api/users/show'
      # redirect_to new_api_session
    else 
      render json: ['Nobody SignedIn'], status: 404
    end 
  end
end
