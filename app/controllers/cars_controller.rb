class CarsController < ApplicationController
  respond_to :json, :html

	def index  

	    if !params[:country_name].blank?  
	    	# TODO doesn't work on PG
	      	@cars = Car.by_country(params[:country_name]).by_make(params[:make_name])
	      	@cars = @cars.uniq_by{ |car| car.name}
	    else      
	    	@cars = Car.all
	    	@cars = @cars.sort_by{rand}
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

	private

	def uniq_by(&blk)
		transforms = []
		self.select do |el|
			should_keep = !transforms.include?(t=blk[el])
			transforms << t
			should_keep
		end
  	end


end