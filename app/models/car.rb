class Car < ActiveRecord::Base
	belongs_to :make

	def country
		make.country
	end

	def country_name
		country.name
	end

	def make_name
		make.name
	end

	def self.by_filter(country_name_str, make_name_str)
		by_make(make_name_str)
  	end

  	# TODO Clean this function up
  	def self.by_country(country_name_str)
	    if country_name_str != "all"
	     	where(country_name => country_name_str)
	    end
  	end

  	# TODO Clean this function up
  	def self.by_make(make_name_str)
	    if make_name_str == "all"
	    	where("cars.id > ?", 0)
	    else
	    	make_id = Make.where(:name => make_name_str).first.id
	    	where(:make_id => make_id)
	    end
  	end

end
