class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])

    if @user
      render :show 
    else
      render json: @user.errors.full_messages, status: 404
    end
  end
  
  def new
    @user = User.new 
    render :new 
  end

  def create
    debugger 
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      #redirect_to user_url(@user) # show, @user being the wildcard
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def edit
    @user = User.find(params[:id])
    render :edit 
  end 

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      #redirect_to user_url(@user) # show, @user being the wildcard
      render :show 
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])

    if @user.destroy
      redirect_to users_url # create
    else
      render plain: "Sorry user not found"
    end
  end


  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password)
  end 
end
