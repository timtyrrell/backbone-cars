class CountriesController < ApplicationController
  respond_to :json, :html

  # Backbone will call this code anytime the CountryList.fetch() is called
  def index
    @countries = Country.all

    respond_to do |format|
      format.html
      format.json
    end
  end

end