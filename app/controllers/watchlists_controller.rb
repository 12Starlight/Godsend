class WatchlistsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :index]
  
  def index 
    @user = User.find(params[:godsend_id]) # defining user 
    @watchlist = @user.watchlist # refrencing association
    render :index 
  end
  
  def new
    @watchlist = Watchlist.new 
    render :new 
  end

  def create
    @watchlist = Watchlist.new(watchlist_params) # Watchlist item really
    @watchlist.godsend_id = current_user.id 

    if @watchlist.save
      render :index 
    else 
      render json: @watchlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @securitiy = Watchlist.find(params[:securites_id]) 

    if @security.destroy 
      render :index 
    else  
      render json: 'This security does not exist', status: 422
  end


  private
  def watchlist_params
    params.require(:watchlist).permit(:name, :ticker, :godsend_id, :securites_id)
  end
end
