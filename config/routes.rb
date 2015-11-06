Rails.application.routes.draw do
  post 'visitor/:id' => 'visitors#update_visitor'
end
