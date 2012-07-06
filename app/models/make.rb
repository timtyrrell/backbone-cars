class Make < ActiveRecord::Base
	has_many :cars
	belongs_to :country

	def country_name
		country.name
	end

	# TODO This function is hacked together for now
	def self.by_country_name(country_name)
	  	if country_name == "all"
	  		where("id > ?", 0)
	  	else
	  		country_id = Country.where(:name => country_name).first.id
	  		where(:country_id => country_id)
	  	end
	end

end
