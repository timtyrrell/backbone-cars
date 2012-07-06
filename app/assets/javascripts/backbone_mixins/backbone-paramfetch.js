(function(){

    'use strict';

    Backbone.ParamFetchCollection = Backbone.Collection.extend({

        fetchWithParams : function(options, params) {
            options = options ? _.clone(options) : {};
            var url = options.url || this.url;
            // loop through additional parameters here, appending them to url
            if (params) {
                url += "?";
                _.each(_.keys(params), function(key){
                    url += key + "=" + params[key] + "&";
                });
            }
            options.url = url;
            return this.fetch(options);
        }

    });

     Backbone.ParamFetchModel = Backbone.Model.extend({

        fetchWithParams : function(options, params) {
            options = options ? _.clone(options) : {};
            var url = options.url || this.urlRoot;
            // loop through additional parameters here, appending them to url
            if (params) {
                url += "?";
                _.each(_.keys(params), function(key){
                    url += key + "=" + params[key] + "&";
                });
            }
            options.url = url;
            return this.fetch(options);
        }

    });



})();