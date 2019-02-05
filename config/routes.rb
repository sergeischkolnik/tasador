Rails.application.routes.draw do
  resources :clientes
  resources :pedidos
  root 'pedidos#index'
  resources :pedidos do
    collection { post :validate }
  end

 # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
