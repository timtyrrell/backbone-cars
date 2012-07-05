Cars::Application.routes.draw do

  resources :countries, except: [:show]
  resources :makes, except: [:show]
  resources :cars, except: [:show]

  root to: 'cars#index'
  match '/dashboard/*filter' => 'cars#index'

end
