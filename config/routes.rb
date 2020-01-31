Rails.application.routes.draw do
  root to: 'root#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:show, :create, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
