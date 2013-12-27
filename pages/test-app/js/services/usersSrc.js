/*globals
	angular
*/
(function(undefined){
	'use strict';
	angular.module('testApp').factory('usersSrc', function(){
		var factory = {};

		factory.items = [
			{name:'Bruce Wayne', title: 'Bat Man', rating: 400},
			{name:'Tony Stark', title: 'Iron Man', rating: 350},
			{name:'Clark', title: 'Super Man', rating: 150},
			{name:'Peter Parker', title: 'Spiderman', rating: 200},
			{name:'Thor', title: 'Thor', rating: 175},
			{name:'Hulk', title: 'Hulk', rating: 100},
			{name:'Licence to kill', title: '007', rating: 100},
		];

		factory.addItem = function(user){
			user.selected = true;
		};

		factory.removeItem = function(user){
			user.selected = false;
		};

		factory.notify = function(msg) {
			toastr.info(msg);
		};

		return factory;
	});
}());