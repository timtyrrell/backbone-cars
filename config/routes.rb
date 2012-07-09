Cars::Application.routes.draw do

  resources :countries, except: [:show]
  resources :makes, except: [:show]
  resources :cars, except: [:show]

  root to: 'cars#index'
  match '/dashboard' => 'cars#index'
  match '/dashboard/*filter' => 'cars#index'

  # for demo purposes only
  post "/add" => "test#add"
  post "/remove" => "test#remove"
  get "/test" => "test#index"

end
