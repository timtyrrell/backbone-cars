var ColorView = Backbone.View.extend({

	template : _.template($("#colorTemplate").html()),

	initialize : function(options) {
		this.color = "all";
	},

	events : {
		"click .color" : "selectColor"
	},

	render : function() {		
		var html = this.template();
		$(this.el).html(html);
		return this;
	},

	selectColor : function(e) {
		this.color = $(e.target).data("color-type");
		this.trigger("change_color", this.color);
	}

});