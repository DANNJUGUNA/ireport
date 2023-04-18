Rails.application.routes.draw do

  get 'report_types/StatusTypes'
  resources :reports
<<<<<<< HEAD
  resources :admins, only: [:index,:create,:show,:update]
  resources :users
=======
  resources :admins
  resources :users ,only: [:index, :create,:show,:update]
>>>>>>> d70fe25c6e5a73b9801a8945898ee2a47b97931f
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
