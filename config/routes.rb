Asynchealth::Application.routes.draw do
  devise_for :users
  get "/pages/*id" => 'pages#show'

  root :to => 'welcome#index'

  get 'welcome/index'
  
  resources :videos
  resources :users
end
