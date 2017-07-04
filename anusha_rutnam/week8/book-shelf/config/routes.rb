Rails.application.routes.draw do
  root 'pages#app'  #the root route should start our backbone app

get "/app" => "pages#app"

  resources :books
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
