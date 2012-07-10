class TestController < ApplicationController

    def add
        country = Country.where(:name => "Germany").first
        make = Make.where(:name => "Porsche").first
        car = Car.create(country_id: country.id, make_id: make.id, name: "911", color: "Black", image: "c1", price: 68000)
        Pusher["911"].trigger("add_car", get_json("cars", "index", car))
        render :action => "index"
    end

    def remove
        r = rand(35)
        car = Car.find(r);
        Pusher["911"].trigger("remove_car", get_json("cars", "index", car))
        render :action => "index"
    end

    def index

    end

end