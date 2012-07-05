class CarsController < ApplicationController
  respond_to :json, :html

	def index  

	    if !params[:country_name].blank?  
	      	@cars = Car.by_filter(params[:country_name], params[:make_name]).find(:all, :group => "name")
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

		respond_to do |format|
			format.html
			format.json
		end
	end

end