Rails.application.routes.draw do

  get 'report_types/StatusTypes'
  resources :reports
  resources :admins
  resources :users ,only: [ :index,:show]
  post'/login', to: "users#login"
  post'/signup',to:"users#signup"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
