var Car = Backbone.Model.extend({
	
	urlRoot : "/cars",

  engine : function(engineType){
    return engineType + " engine";
  }

});
