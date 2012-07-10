class ApplicationController < ActionController::Base
  protect_from_forgery

    # helper method to work with RABL in controllers
    # RABL works really well when rendering JSON from a controller, but breaks down when JSON is used
    # in other places in Rails
    def get_json(view_path, view_action, object)
        Rabl::Renderer.json(object, view_path + "/" + view_action)
    end
  
end
