module ApplicationHelper

	# TODO This should code around the need to use _ in front of the file name
	def get_json(view_path, view_action, object)
		path = view_path + '/' + view_action + ".json"
		return raw(render(path, object: object, :formats => [:rabl]))
	end
	
end
