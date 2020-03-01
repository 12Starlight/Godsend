class Api::SecuritiesController < ApplicationController
  def new 
    @security = Security.new 
    render :new 
  end

  def create 
    @security = Security.new(security_params)

    if @security.save
      render :show
    else 
      render json: @security.errors.full_messages, status: 422
    end
  end

  def destroy
    @security = Security.find(params[:id])

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
