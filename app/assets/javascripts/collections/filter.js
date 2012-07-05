var CountryList = Backbone.Collection.extend({
	model : Country,
	url : "/countries"
});

var MakeList = Backbone.Collection.extend({
	model : Make,
	url : "/makes"
});

var CarModelList = Backbone.Collection.extend({		
	model : CarModel,
	url : "/cars"
});