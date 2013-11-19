/*globals 
	angular: true
*/
(function () {
	'use strict';
	angular.module('srvApp', ['ui.bootstrap', 'srvNg.directives'])
		.config(function($routeProvider) {
			$routeProvider
			.when('/home', {templateUrl: 'partials/home.html'})
			.when('/directives', {templateUrl: 'partials/directives.html'})
			.otherwise({redirectTo: '/home'});
		});
}());