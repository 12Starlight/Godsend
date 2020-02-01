class ApplicationController < ActionController::Base
  protect_from_forgery with: exception
  helper_method :current_user, :logged_in?
  # skip_before_action :verify_authenticity_token


  # Build Main Methods
  def login!(user)
    session[:session_token] = user.session_token 
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def require_logged_in
    unless current_user
      render json: { base: ['Invalid username and/or password']}, status: 401
      redirect_to new_session_url unless logged_in?
    end
  end

  def require_logged_out
    redirect_to user_url(current_user) if logged_in?
  end

  def logged_in?
    !!current_user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil 
  end
end


