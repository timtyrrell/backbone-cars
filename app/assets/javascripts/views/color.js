var ColorView = Backbone.View.extend({

	//template : _.template($("#colorTemplate").html()),

	initialize : function(options) {
		this.color = "all";
		this.template = JST["templates/color"];
	},

	events : {
		"click .color" : "selectColor"
	},

	render : function() {		
		var html = this.template();
		$(this.el).html(html);
		this.renderColorChooser();
		return this;
	},

	renderColorChooser : function() {
		var _this = this;
		$(this.el).find(".color").removeClass("active");
		$(this.el).find(".color").each(function() {
			if ($(this).data("color-type") === this.color) {
				$(this).addClass("active");
			}
		});
	},

	selectColor : function(e) {
		this.color = $(e.target).data("color-type");
		this.trigger("change_color", this.color);
	},

	setColor : function(color) {
		this.color = color;
	}

});