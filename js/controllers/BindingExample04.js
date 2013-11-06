(function(){
	'use strict';
	window.myApp.controller('BindingExample04', function($scope){
		$scope.developers = [
			{ name: 'Sreejesh', skills: 'Robotics!'},
			{ name: 'Jyoti Prakash', skills:'HTML/CSS'}
		];

		$scope.nameNewDeveloper = '';

		$scope.addDeveloper = function() {
			$scope.developers.push({
				name: $scope.nameNewDeveloper
			});
		};
	});
}());