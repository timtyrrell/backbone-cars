/**
 *  I found myself passing params into a Collection and Model's fetch() so often method that I created a mixin to make it
 *  easier.  Simply call the fetchWithParams() method with the options as the first argument (optional) and the params
 *  in a hash as the 2nd argument.
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