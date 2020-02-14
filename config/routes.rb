Rails.application.routes.draw do
  root to: 'static_pages#root' # for front end
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:show, :edit, :create, :destroy] do 
      resources :watchlists, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :watchlists, only: [:create, :destroy]
  end
  
end
