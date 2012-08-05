class CarsController < ApplicationController
  respond_to :json, :html

  # Backbone will call this code anytime the CarmodelList or CarList calls fetch()
  # Since we use fetchWithParams in our Backbone code, we can switch off the available params
	def index  
	  if !params[:country_name].blank?  
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

	# Backbone will call this code anytime the Car object calls save()
	# The outputted JSON will be sent back to Backbone, which will then update the Car object
	def update
		@car = Car.find params[:id]
		@car.update_attributes params[:car]

		# Use Pusher to send the event to all listeners
		# Follow the naming convention required when using the LiveCollection mixin
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
