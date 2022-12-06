Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    resources :greetings, only: [:index]
  end

  get '/*path', to: 'home#index', via: :all

  root 'home#index'
end
