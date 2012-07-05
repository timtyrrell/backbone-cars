var DashboardRouter = Backbone.Router.extend({

	initialize : function(options) {
		var _this = this;

		this.filterView = options.filterView;
		this.colorView = options.colorView;
		this.carView = options.carView;

		this.filterView.on("change_country change_make change_carmodel", function(text) {
			Backbone.history.navigate("dashboard/" + _this.filterView.country + "/" + _this.filterView.make + "/" + _this.filterView.carmodel + "/" + _this.colorView.color, {trigger: true});	
		});

		this.colorView.on("change_color", function(text) {
			Backbone.history.navigate("dashboard/" + _this.filterView.country + "/" + _this.filterView.make + "/" + _this.filterView.carmodel + "/" + _this.colorView.color, {trigger: true});	
		});
	},

	routes : {
		"" : "all",
		"dashboard/" : "show",
		"dashboard/:country" : "show",
		"dashboard/:country/:make" : "show",
		"dashboard/:country/:make/:carmodel" : "show",
		"dashboard/:country/:make/:carmodel/:color" : "show"
	},

	all : function() {
		Backbone.history.navigate("dashboard/", {trigger: true});
	},

	show : function(country, make, carmodel, color) {
		country = country || "all";
		make = make || "all";
		carmodel = carmodel || "all";
		color = color || "all";
		this.filterView.setFilter(country, make, carmodel);
		this.filterView.render();
		this.carView.setFilters(country, make, carmodel, color);
		this.carView.render();
	}

});