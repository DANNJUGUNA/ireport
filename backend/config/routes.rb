Rails.application.routes.draw do

  get 'report_types/StatusTypes'
  resources :reports
  resources :admins
  resources :users ,only: [ :index,:show]
  resources :report_statuses, only: [:index]
  resources :report_types, only: [:index]
  post'/login', to: "users#login"
  post'/signup',to:"users#signup"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post'/admin',to:"admins#admin"
  get '/userreport/:user_id', to: 'reports#user_reports'
  post '/signup_admin',to:"admins#signup_admin"
  # Defines the root path route ("/")
  # root "articles#index"
end
