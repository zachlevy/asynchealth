Asynchealth::Application.routes.draw do
  get "/pages/*id" => 'pages#show'

  root :to => 'welcome#index'

  get 'welcome/index'
  
  resources :timelines
  resources :videos
  resources :users
end
