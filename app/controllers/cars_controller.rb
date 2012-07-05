class CarsController < ApplicationController
  respond_to :json, :html

	def index  

	    if !params[:country_name].blank?  
	    	# TODO need to add by_country
	      	@cars = Car.by_make(params[:make_name]).find(:all, :group => "name")
	    else      
	    	@cars = Car.all
			@countries = Country.all
	    end

		respond_to do |format|
			format.html
			format.json
		end
	end

	def update
		@car = Car.find params[:id]
		@car.update_attributes params[:car]

		# Use Pusher to send the event to all listeners
		Pusher["911"].trigger("update_car", get_json("cars", "index", @car))

		respond_to do |format|
			format.html
			format.json
		end
	end

end