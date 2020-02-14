class Api::WatchlistsController < ApplicationController
  before_action :require_logged_in, only: [:index, :show, :create, :destroy]
  
  def index
    @watchlists = current_user.watchlists.all # 2. 3. 5. 6.
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

  #def new
    #@watchlist = Watchlist.new
   # render :new 
  #end

  def create 
    debugger 
    @watchlist = Watchlist.new(watchlist_params)
    @watchlist.godsend_id = current_user.id 


    if @watchlist.save
      render :show 
    else
      render json: @watchlist.errors.full_messages, status: 422
    end 
  end 

  def destroy
    @watchlist = Watchlist.find(params[:id])

    if @watchlist.destroy
      render :show 
    else
      render json: 'The security does not exist', status: 422
    end
  end


  private 
  def watchlist_params
    params.require(:watchlist).permit(:company_name, :ticker, :godsend_id, :securities_id)
  end 
end





