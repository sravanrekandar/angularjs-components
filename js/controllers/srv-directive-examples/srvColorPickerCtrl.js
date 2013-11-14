/*globals
	angular
*/
(function(){
	'use strict';
	angular.module('srvApp')
		.controller('srvColorPickerCtrl', function($scope){
			$scope.color = {
				red: 10,
				green: 10,
				blue: 10
			};
		});
}());