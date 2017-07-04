Rails.application.routes.draw do
  get 'secret_number/index'

  get 'games/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  # Root routes look a little different to other routes. This basically just says that requests to the "root" path (eg "/") are sent to the "pages" controller's "home" action.
  root :to => 'pages#home'

  # STATIC ROUTES
  # request_type route => controller#action
  get '/home' => 'pages#home'

  # DYNAMIC ROUTES WITH VARIABLE BITS IN PARAMS (JUST LIKE SINATRA)
  get '/auto/:color' => 'auto#color'

get '/games' => 'pages#games'

get '/magic/' => 'magic#magic'

get '/search/' => 'magic#magic'

get '/secret_number/' => 'secret_number#secret_number'

get '/search/' => 'secret_number#secret_number'

get '/rps/:throw' => 'rps#rps'



  get '/calc/:x/:operator/:y' => 'calculator#do_calc'

end
