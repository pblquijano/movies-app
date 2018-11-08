Rails.application.routes.draw do
  get '/rent' => 'rent#index'

  get '/login' => 'login#index'

  get '/edit' => 'edit#index'

  get '/new' => 'new#index'

  get '/detail' => 'detail#index'

  root 'home#index' 

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
