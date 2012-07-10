class MakesController < ApplicationController
  respond_to :json, :html

  	# Backbone will call this code anytime the makeList.fetch() or fetchWithParams() is called 
  	# Since we've used fetchWithParams(), we can switch off the available parameters
	def index  

	    if params[:country_name].blank?
	      @makes = Make.all
	    else
	      @makes = Make.by_country_name(params[:country_name])
	    end

		respond_to do |format|
			format.html
			format.json
		end
	end

end