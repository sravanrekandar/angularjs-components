'use strict';
amApp.factory('AMCommonService', function($http) {
	var factory = {};
	
	factory.getData = function(url, callback, cache, data) {
		var data = data || {'Try': 'Me'};
		var cache = cache || false;
		$http({	url : url,
			method : "POST",
			cache : cache,
			data: data
		}).success(function(jsonData) {	
			callback(jsonData);
		}).error(function(jsondata, status, headers, config) {
			// error actions
		});
	};
	
	factory.getDataAsync = function(url, callback, data, urlencoded, cache) {
		showProgress();
		var config = {};
		var data = data || {};
		var cache = cache || false;
		var urlencoded = urlencoded || true;
		var appContextRoot = appContextRoot || '';
		
		if (urlencoded) {
			config['headers'] = {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'};
		} else {
			config['headers']={'Content-Type': 'application/json'};			
		}

		config['data'] = data;
		config['params'] = data;
		config['url'] = appContextRoot + url;
		config['method'] = 'post';
		config['cache'] = cache;
		
		$http(config)
		.success(function (response, status, headers, config) {
			callback(response);
			hideProgress();
		})
		.error(function(response, status, headers, config){
			hideProgress();
			// error actions
		});
	};
	
	return factory;
});