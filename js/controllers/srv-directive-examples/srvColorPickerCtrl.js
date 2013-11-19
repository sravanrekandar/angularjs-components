/*globals
	angular
*/
(function(){
	'use strict';
	angular.module('srvApp')
		.controller('srvColorPickerCtrl', ['$scope', function($scope){
			$scope.color = {
				red: 10,
				green: 10,
				blue: 100
			};
		}]);
}());