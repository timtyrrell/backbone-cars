// The car view handles an individual car that is displayed on the page
var CarView = Backbone.View.extend({
	
	tagName : "div",
	className : "car",

	// grab the template from the JST object
	// bind to this car's "change" and "remove" event
	// if we "change" the car, just re-render it
	// if we "remove" it, do some cleanup
	initialize : function() {
		this.template = JST["templates/car"];
		this.model.on("change", this.render, this);
		this.model.on("remove", this.removeCar, this);
	},

	// standard render code
	// 2 special cases are contained in this, which decorate the $el in given situations
	render : function() {
		var html = this.template(this.model.toJSON());
		this.$el.html(html);

		if (this.model.get("featured")) {
			this.$el.find(".car-image").attr("width", 346);
		}

		if (this.model.get("bought")){
			this.$el.addClass("bought");
		}

		// handles repainting the masonry jQuery plugin
		this.model.trigger("masonry", "reload");
		return this;
	},

	// bind to the click even on the "Buy It" button
	events : {
		"click .buy" : "buy"
	},

	// if the "Buy It" button is pressed, save the change to Car's data
	// however, pass "{silient:true}" since we will depend on the server, using Pusher, to verify the save was valid
	buy : function() {
		this.model.save("bought", true, {silent:true});
		// handles repainting the masonry jQuery plugin
		this.model.trigger("masonry", "reload");
	},

	// do some cleanup on a remove
	// remove() is in the view as a convenience because it is tough to remove things otherwise
	removeCar : function() {
		this.remove();
		// handles repainting the masonry jQuery plugin
		this.model.trigger("masonry", "reload");
	}

});

// this object handles rendering all the cars and filters out the ones that shouldn't be visible
var CarListView = Backbone.View.extend({

	initialize : function() {

		// listen to events from the underlying Collection and its Models
		this.collection.on("reset", this.render, this);
		this.collection.on("add", this.addCar, this);
		this.collection.on("masonry", this.updateMasonry, this);
	},

	// the render function passes the Collection to the filterCars() function, getting a temp Collection
	// back from the method.  It then renders this temp Collection.
	render : function() {

		var _this = this;

		this.$el.empty();

		var tempCollection = new CarList(this.filterCars());

		tempCollection.each(function(model){
			_this.addCarToView(model);
		});

		return this;
	},

	// a method that handles repainting the masonry jQuery plugin
	updateMasonry : function() {
		if ($(".cars-view").hasClass("masonry"))
			$(".cars-view").masonry("reload");
	},

	// adds a car to the UI
	addCarToView : function(model) {
		var c = new CarView({model:model});
		this.$el.append(c.render().el);
		this.updateMasonry();
	},

	// checks whether a car can be added to the UI, and if so, then passes it along to the addCarToView function
	addCar : function(model) {
		if (this.isFilteredIn(model)) {
			this.addCarToView(model);
		}
	},

	// allows the Router to set data on this object, for use in filtering
	setFilters : function(country, make, carmodel, color) {
		this.country = country;
		this.make = make;
		this.carmodel = carmodel;
		this.color = color;
	},

	// loops through the internal Collection and filters out Cars that shouldn't be displayed in this filtered view
	filterCars : function() {
		var _this = this;
		return this.collection.filter(function(model){
			return _this.isFilteredIn(model);
		});
	},

	// a simple true/false chain that determines if a car should be shown in this filtered view
	isFilteredIn : function(model) {

		if (this.country !== "all" && this.country !== model.get("country_name")) {
			return false;
		}

		if (this.make !== "all" && this.make !== model.get("make_name")) {
			return false;
		}

		if (this.carmodel != "all" && this.carmodel != model.get("name")) {
				return false;
			}

		if (this.color === "all" || this.color.toLowerCase() === model.get("color").toLowerCase()) {
			return true;
		}

		return false;
	}

});