class ApplicationController < ActionController::Base
  protect_from_forgery

  def get_json(view_path, view_action, object)
    Rabl::Renderer.json(object, view_path + "/" + view_action)
  end
  
end
