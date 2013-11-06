(function(){
	'use strict';
	window.myApp.factory('HomeService', function($http){
		var factory = {};
		
		factory.getPages = function(callback) {
			factory.getData('assets/pages.json', callback)
		};

		factory.getData = function(url, callback, cache, data) {
			var data = data || {'Try': 'Me'};
			var cache = cache || false;
			$http({	url : url,
				method : "GET",
				cache : cache,
				data: data
			}).success(function(jsonData) {	
				callback(jsonData);
			}).error(function(jsondata, status, headers, config) {
				// error actions
			});
		};
		return factory;
	});
}());