module ApplicationHelper

    # helper method to work with RABL in views
    # RABL works really well when rendering JSON from a controller, but breaks down when JSON is used
    # in other places in Rails
	def get_json(view_path, view_action, object)
		path = view_path + '/' + view_action + ".json"
		return raw(render(path, object: object, :formats => [:rabl]))
	end
	
end
