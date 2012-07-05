var CountryList = Backbone.LiveCollection.extend({
	model : Country,
	url : "/countries"
});

var MakeList = Backbone.LiveCollection.extend({
	model : Make,
	url : "/makes"
});

var CarModelList = Backbone.LiveCollection.extend({		
	model : CarModel,
	url : "/cars"
});