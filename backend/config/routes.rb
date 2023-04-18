Rails.application.routes.draw do

  get 'report_types/StatusTypes'
  resources :reports
  resources :admins, only: [:index,:create,:show,:update,:destroy]
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
