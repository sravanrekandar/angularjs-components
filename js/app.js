/*globals 
	angular: true
*/
(function () {
	'use strict';
	angular.module('myApp', [])
		.config(function($routeProvider) {
			$routeProvider
			.when('/home', {templateUrl: 'partials/home.html'})
			.otherwise({redirectTo: '/home'});
		});
}());