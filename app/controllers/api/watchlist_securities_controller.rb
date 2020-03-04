class Api::WatchlistSecuritiesController < ApplicationController
  # before_action :require_logged_in, only: [:index, :show, :create, :destroy]
  
  def index
    #debugger 
    @securities = Security.all 
    #@security = Security.find_by(params[:securities_id])
    @security = Watchlist.find_by(params[:securities_id])
    @watchlists = current_user.watchlist_securities.all
    render :index 
  end

  def show
    @watchlist = Watchlist.find(params[:id])

    if @watchlist
      render :show 
    else 
      render json: @watchlist.errors.full_messages, status: 404
    end
  end 

  def new
    @watchlist = Watchlist.new
   render :new 
  end

  def create 
    @watchlist = Watchlist.new(watchlist_params)
    @watchlist.godsend_id = current_user.id 


    if @watchlist.save
      render :show 
    else
      render json: @watchlist.errors.full_messages, status: 422
    end 
  end 

  def destroy
    @watchlist = Watchlist.find_by(params[:securities_id])

    if @watchlist.destroy
      render :show 
    else
      render json: 'The security does not exist', status: 422
    end
  end


  private 
  def watchlist_params
    params.require(:watchlist).permit(:securities_id)
  end 
end
