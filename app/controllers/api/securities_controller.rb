class Api::SecuritiesController < ApplicationController
  def new 
    @security = Securities.new 
    render :new 
  end

  def create 
    @security = Securities.new(security_params)

    if @security.save
      render json: 'Successfully Added To Watchlist!'
    else 
      render json: @security.errors.full_messages, status: 422
    end
  end

  def destroy
    @security = Securities.find(params[:id])

    if @security.destroy 
      render json: 'Deleted Security From Watchlist'
    else
      render json: 'Sorry Security Not Found'
    end
  end


  private
  def security_params
    params.require(:security).permit(:company_name, :ticker)
  end
end
