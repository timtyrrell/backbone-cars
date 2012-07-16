// this view handles the color filters in the application
// it is the easiest and most straight-forward view in the application
var ColorView = Backbone.View.extend({

	// set up a default color
	// grab the template from the JST object
	initialize : function(options) {
		this.color = "all";
		this.template = JST["templates/color"];
	},

	// bind the events in this view
	events : {
		"click .color" : "selectColor"
	},

	// a very standard render() function that delegates some rendering to another function
	render : function() {		
		var html = this.template(this.model);
		this.$el.html(html);
		return this;
	},

	// also does rendering, setting the look of the widget to be correct
	renderColorChooser : function() {
		var _this = this;
		this.$el.find(".color").removeClass("active");
		this.$el.find(".color").each(function() {
			if ($(this).data("color-type") === _this.color) {
				$(this).addClass("active");
			}
		});
	},

	// handles the event when a color is selected
	selectColor : function(e) {
		// the $(e.target) is the way to determine which color was chosen
		this.color = $(e.target).data("color-type");
		// trigger an event that the color has changed
		// remember to always trigger events up the chain, in this case to the Router
		// the router will push the change to all the views and handle re-rendering
		this.trigger("change_color", this.color);
	},

	// a convenience function to set the color
	setColor : function(color) {
		this.color = color;
	}

});