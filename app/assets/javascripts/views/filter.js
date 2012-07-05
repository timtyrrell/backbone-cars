var CountryView = Backbone.View.extend({
	tagName : "li",
	template : _.template('<a href="#" class="country-filter" data-filter-type="{{=name}}">{{=name}}</a>'),

	initialize : function() {
		this.model.on("remove", this.remove, this);
	},

	render : function() {
		var html = this.template(this.model.toJSON());
		$(this.el).html(html);
		return this;
	},

	events : {
		"click .country-filter" : "selectCountry",
	},

	selectCountry : function(e) {
		this.trigger("select", e, this);
	}
});

var MakeView = Backbone.View.extend({
	tagName : "li",
	template : _.template('<a href="#" class="make-filter" data-filter-type="{{=name}}">{{=name}}</a>'),

	initialize : function() {
		this.model.on("remove", this.remove, this);
	},

	render : function() {
		var html = this.template(this.model.toJSON());
		$(this.el).html(html);
		return this;
	},

	events : {
		"click .make-filter" : "selectMake",
	},

	selectMake : function(e) {
		this.trigger("select", e, this);
	}
});

var CarModelView = Backbone.View.extend({
	tagName : "li",
	template : _.template('<a href="#" class="carmodel-filter" data-filter-type="{{=name}}">{{=name}}</a>'),

	initialize : function() {
		this.model.on("remove", this.remove, this);
	},

	render : function() {
		var html = this.template(this.model.toJSON());
		$(this.el).html(html);
		return this;
	},

	events : {
		"click .carmodel-filter" : "selectCarmodel",
	},

	selectCarmodel : function(e) {
		this.trigger("select", e, this);
	}
});

var FilterView = Backbone.View.extend({

	tagName : "div",
	template : _.template($("#filterTemplate").html()),

	initialize : function(options) {

		var _this = this;

		this.country = "all";
		this.make = "all";
		this.carmodel = "all";

		this.countryCollection = options.countryCollection;
		this.makeCollection = options.makeCollection;
		this.carmodelCollection = options.carmodelCollection;

		if (this.countryCollection) {
			this.countryCollection.on("reset", this.render, this);
		}
		if (this.makeCollection) {
			this.makeCollection.on("reset", this.renderMake, this);
		}
		if (this.carmodelCollection) {
			this.carmodelCollection.on("reset", this.renderCarmodel, this);
		}
	},

	events : {
		"click .all-country-filter" : "selectCountry",
		"click .all-make-filter" : "selectMake",
		"click .all-carmodel-filter" : "selectCarmodel"
	},

	render : function() {

		var c = (this.countryCollection !== undefined);
		var m = (this.makeCollection !== undefined);
		var r = (this.carmodelCollection !== undefined);

		var json = '{"country":' + c + ', "make":' + m + ', "carmodel":' + r + '}';

		var html = this.template($.parseJSON(json));
		$(this.el).html(html);

		if (this.countryCollection) {
			this.renderCountry();
		}
		if (this.makeCollection) {
			this.renderMake();
		}
		if (this.carmodelCollection) {
			this.renderCarmodel();
		}

		return this;
	},

	renderCountry : function() {
		var _this = this;
		// keep the first one, which is always "All Countries"
		$(_this.el).find(".country-filter").slice(1).remove();
		this.countryCollection.each(function(country){
			var view = new CountryView({model:country});
			view.on("select", function(e, v){
				_this.selectCountry(e, v);
			});
			$(_this.el).find(".country-dropdown-menu").append(view.render().el);
		});
		$(".country-filter").each(function(){
			if (_this.country == $(this).data("filter-type"))
			{
				$("#all-countries").find(".choice-title").text($(this).text());
			}
		});
	},

	renderMake : function() {
		var _this = this;
		// keep the first one, which is always "All Makes"
		$(_this.el).find(".make-filter").slice(1).remove();
		this.makeCollection.each(function(make){
			var view = new MakeView({model:make});
			view.on("select", function(e, v){
				_this.selectMake(e, v);
			});
			$(_this.el).find(".make-dropdown-menu").append(view.render().el);
		});
		$(".make-filter").each(function(){
			if (_this.make == $(this).data("filter-type"))
			{
				$("#all-makes").find(".choice-title").text($(this).text());
			}
		});
	},

	renderCarmodel : function() {
		var _this = this;
		// keep the first one, which is always "All Cars"
		$(_this.el).find(".carmodel-filter").slice(1).remove();
		this.carmodelCollection.each(function(carmodel){
			var view = new CarModelView({model:carmodel});
			view.on("select", function(e, v){
				_this.selectCarmodel(e, v);
			});
			$(_this.el).find(".carmodel-dropdown-menu").append(view.render().el);
		});
		$(".carmodel-filter").each(function(){
			if (_this.carmodel == $(this).data("filter-type"))
			{
				$("#all-carmodels").find(".choice-title").text($(this).text());
			}
		});
	},

	selectCountry : function(e, view) {	
		if (!view) {
			this.country = "all";
		}
		else {
			this.country = view.model.get("name");
		}
		this.make = "all";
		this.carmodel = "all";

		this.trigger("change_country", this.country);

		// update the make combobox
		this.makeCollection.fetch({url: this.makeCollection.url + "?country_name=" + this.country});

		// update the car combobox
		this.carmodelCollection.fetch({url: this.carmodelCollection.url + "?country_name=" + this.country + "&make_name=" + this.make});

		e.preventDefault();

	},

	selectMake : function(e, view) {	
		if (!view) {
			this.make = "all";
		}
		else
		{
			this.country = view.model.get("country_name");
			this.make = view.model.get("name");
		}
		this.carmodel = "all";

		this.trigger("change_make", this.make);

		// update the car combobox
		this.carmodelCollection.fetch({url: this.carmodelCollection.url + "?make_name=" + this.make + "&country_name=" + this.country});

		e.preventDefault();
	},

	selectCarmodel : function(e, view) {
		if (!view) {
			this.carmodel = "all";
		}
		else
		{
			this.country = view.model.get("country_name");
			this.make = view.model.get("make_name");
			this.carmodel = view.model.get("name");
		}

		this.trigger("change_carmodel", this.carmodel);

		e.preventDefault();
	},

	setFilter : function(country, make, carmodel) {
		this.setCountry(country);
		this.setMake(make);
		this.setCarmodel(carmodel);
	},

	setCountry : function(country) {
		this.country = country;
	},

	setMake : function(make) {
		this.make = make;
	},

	setCarmodel : function(carmodel) {
		this.carmodel = carmodel;
	}

});