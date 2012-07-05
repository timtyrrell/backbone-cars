/**
 *  A Collection that can fetch additional records easily.  
 *  A good example usage would be a Pinterest like page, that can
 *  continually call fill() to auto-load new models on the scroll bar movements.
 *
 *  v0.1
 *
 *  Changes
 *  0.1 - initial release
 *
 *  CabForward - Austin's Leading Rails Shop 
 *
 *  Copyright (c) 2012 Michael Abernethy
 *  MIT Licensed (LICENSE)
 *
 */
(function(){

  	'use strict';

  	Backbone.AutoFetchCollection = Backbone.Collection.extend({

  		fill : function(params, options, callback) {
  			var _this = this;

  			this.fetchSize = options.fetchSize || 20;

	  		var minID = this.getMinID();
	  		var maxID = this.getMaxID();
	  		var url = this.url + "?fetch_size=" + this.fetchSize + "&min_id=" + minID + "&max_id=" + maxID + "&current_size=" + this.size();

	  		// loop through additional parameters here, appending them to url
	  		_.each(_.keys(params), function(key){
	  			url += "&" + key + "=" + params[key];
	  		});

	  		_this.fetch({url: url, add: true,
		  			     success: function(collection, resp) {
		  			     	var newModels = resp;
		  			    	_this.trigger("fill", collection, newModels);
		  			    	if (callback) {
			  					callback.call(this, collection, newModels, resp, options);
			  				}
	  			        }	
	  			    });
  		},

		getMaxID : function() {
			var max = 0;
			_.each(this.models, function(model){
				if (max < model.get("id"))
					max = model.get("id");
			});
			return max;
		},

		getMinID : function() {
			var min = 1000000;
			_.each(this.models, function(model){
				if (min > model.get("id"))
					min = model.get("id")
			});
			return min;
		}

  	});

})();
