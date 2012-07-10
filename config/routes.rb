Cars::Application.routes.draw do

  resources :countries, except: [:show]
  resources :makes, except: [:show]
  resources :cars, except: [:show]

  # These MUST be set up properly in order to get Backbone working properly
  # Rails must be able to route any address onto Backbone to handle properly
  # Since anyone can type any address into the browser, Rails must handle it first, and then it can
  # pass it off to Backbone to do all the heavy lifting.
  root to: 'cars#index'
  match '/dashboard' => 'cars#index'
  match '/dashboard/*filter' => 'cars#index'

  # for demo purposes only
  post "/add" => "test#add"
  post "/remove" => "test#remove"
  get "/test" => "test#index"

end
