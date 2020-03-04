class Api::WatchlistSecuritiesController < ApplicationController
  # before_action :require_logged_in, only: [:index, :show, :create, :destroy]
  
  def index
    @securities = Security.all 
    #@security = Security.find_by(params[:security_id])
    @security = WatchlistSecurity.find_by(params[:security_id])
    @watchlists = current_user.watchlist_securities.all
    render :index 
  end

  def show
    @watchlist = WatchlistSecurity.find(params[:id])

    if @watchlist
      render :show 
    else 
      render json: @watchlist.errors.full_messages, status: 404
    end
  end 

  def new
    @watchlist = WatchlistSecurity.new
   render :new 
  end

  def create 
    @watchlist = WatchlistSecurity.new(watchlist_params)
    @watchlist.godsend_id = current_user.id 


    if @watchlist.save
      render :show 
    else
      render json: @watchlist.errors.full_messages, status: 422
    end 
  end 

  def destroy
    @watchlist = WatchlistSecurity.find_by(params[:security_id])

    if @watchlist.destroy
      render :show 
    else
      render json: 'The security does not exist', status: 422
    end
  end


  private 
  def watchlist_params
    params.require(:watchlist_security).permit(:security_id)
  end 
end
