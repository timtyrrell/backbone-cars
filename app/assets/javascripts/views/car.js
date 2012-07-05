var CarView = Backbone.View.extend({
	
	tagName : "div",
	className : "car",
	template : _.template($("#carTemplate").html()),

	initialize : function() {
		this.model.on("change", this.render, this);
	},

	render : function() {
		var html = this.template(this.model.toJSON());
		$(this.el).html(html);

		if (this.model.get("featured")) {
			$(this.el).find(".car-image").attr("width", 346);
		}

		if (this.model.get("bought")){
			$(this.el).addClass("bought");
		}

		return this;
	},

	events : {
		"click .buy" : "buy"
	},

	buy : function() {
		this.model.save("bought", true, {silent:true});
		this.model.trigger("masonry", "reload");
	}

});


var CarListView = Backbone.View.extend({

	initialize : function() {

		this.collection.on("reset", this.render, this);
		this.collection.on("add", this.addCar, this);
		this.collection.on("remove", this.removeCar, this);
		this.collection.on("masonry", this.updateMasonry, this);
	},

	render : function() {

		var _this = this;

		$(this.el).empty();

		var tempCollection = new CarList(this.filterCars());

		tempCollection.each(function(model){
			_this.addCarToView(model);
		});

		return this;
	},

	updateMasonry : function() {
		if ($(".cars-view").hasClass("masonry"))
			$(".cars-view").masonry("reload");
	},

	addCarToView : function(model) {
		var c = new CarView({model:model});
		$(this.el).append(c.render().el);
		this.updateMasonry();
	},

	addCar : function(model) {
		if (this.isFilteredIn(model)) {
			this.addCarToView(model);
		}
	},

	removeCar : function(model) {
		model.remove();
		this.updateMasonry();
	},

	setFilters : function(country, make, carmodel, color) {
		this.country = country;
		this.make = make;
		this.carmodel = carmodel;
		this.color = color;
	},

	filterCars : function() {
		var _this = this;
		return this.collection.filter(function(model){
			return _this.isFilteredIn(model);
		});
	},

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