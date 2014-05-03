Asynchealth::Application.routes.draw do
  root :to => 'welcome#index'
  
  get 'welcome/index'
  
  resources :timelines

  resources :videos
end
