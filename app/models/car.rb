class Car < ActiveRecord::Base
	belongs_to :make
    belongs_to :country
    attr_accessible :country_id, :make_id, :name, :color, :image, :price, :featured

	def country_name
		country.name
	end

	def make_name
		make.name
	end

	def dollar_amount
		ActionController::Base.helpers.number_to_currency(self[:price])
	end

	def self.by_filter(country_name_str, make_name_str)
		by_make(make_name_str)
  	end

  	# TODO This function is hacked together for now since I couldn't figure out a better way, and this is
    # a demo of Backbone, not Rails Scopes
  	def self.by_country(country_name_str)
	    if country_name_str == "all"
            where("id > ?", 0)
        else
            country_id = Country.where(:name => country_name_str).first.id
	     	where(:country_id => country_id)
	    end
  	end

    # TODO This function is hacked together for now since I couldn't figure out a better way, and this is
    # a demo of Backbone, not Rails Scopes
  	def self.by_make(make_name_str)
	    if make_name_str == "all"
	    	where("id > ? ", 0)
	    else
	    	make_id = Make.where(:name => make_name_str).first.id
	    	where(:make_id => make_id)
	    end
  	end

end
