Rails.application.routes.draw do

  get 'report_types/StatusTypes'
  resources :reports
  resources :admins
  resources :users ,only: [:index, :create,:show,:update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
