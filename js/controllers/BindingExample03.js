(function(){
	'use strict';
	window.myApp.controller('BindingExample03', function($scope){
		$scope.developers = [
			{ name: 'Sreejesh', skills: 'Robotics!'},
			{ name: 'Jyoti Prakash', skills:'HTML/CSS'}
		];
	});
}());