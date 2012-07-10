// The DashboardRouter acts as the controller in this MVC setup
// It is responsible for listening to the events from each view, and then dispatching them back to all the other views
// It also handles the responsibility of the routing, so using Backbone's internal routing mechanisms, it
// listens to routes and handles setting up the views appropriately.
var DashboardRouter = Backbone.Router.extend({

	// set up the router with all the views on our page, and then listen to all the events that
	// can get thrown
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

	// set up all the routes in this object
	// make sure to handle every possible scenario, since we want to handle every possibility a user can type in
	routes : {
		"" : "all",
		"dashboard/" : "show",
		"dashboard/:country" : "show",
		"dashboard/:country/:make" : "show",
		"dashboard/:country/:make/:carmodel" : "show",
		"dashboard/:country/:make/:carmodel/:color" : "show"
	},

	// handle the index case specially, and reroute it to the dashboard
	all : function() {
		Backbone.history.navigate("dashboard/", {trigger: true});
	},

	// this function is called by Backbone when any route is matched from our routes object
	// it defaults the parameters if they aren't passed in, and then sets these values on the views themselves
	// finally, it is responsible for re-rendering the views 
	// remember, the views now have new data, so they must be re-rendered to show the new data
	show : function(country, make, carmodel, color) {
		country = country || "all";
		make = make || "all";
		carmodel = carmodel || "all";
		color = color || "all";
		this.filterView.setFilter(country, make, carmodel);
		this.filterView.render();
		this.colorView.setColor(color);
		this.colorView.render();
		this.carView.setFilters(country, make, carmodel, color);
		this.carView.render();
	}

});