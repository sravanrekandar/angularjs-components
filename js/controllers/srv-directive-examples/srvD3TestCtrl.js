/*globals
	angular
*/
(function(){
	'use strict';
	angular.module('srvApp')
		.controller('srvD3TestCtrl', ['$scope', function($scope){
			$scope.shares = [
				{'label':'one', 'value':20},
				{'label':'two', 'value':50},
				{'label':'three', 'value':30}
			];
		}]);
}());