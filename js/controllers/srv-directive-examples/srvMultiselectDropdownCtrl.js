/*globals
	angular
*/
(function(){
	'use strict';
	angular.module('srvApp')
		.controller('srvMultiselectDropdownCtrl', function($scope) {
			$scope.heros = [
				{name: 'Peter Parker'},
				{name: 'Bruce wayne'},
				{name: 'Tony Stark'}
			];
			$scope.fruits = [
				{name: 'Apple'},
				{name: 'Banana'},
				{name: 'Grape'},
				{name: 'Mango'},
				{name: 'Orange	'},
			];

			$scope.selectedHeros = [];
			$scope.selectedFruits = [];
		});
}());