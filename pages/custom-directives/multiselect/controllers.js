/**
* Author: SRAVANREKANDAR
* Last Modified :20131106
*/

/*globals
	myApp: true
(*/
(function(){
	'use strict';
	myApp.controller('myController', function($scope){
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