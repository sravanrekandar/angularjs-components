(function(){
	'use strict';
	window.myApp.controller('BindingExample05', function($scope){
		$scope.developers = [
			{ name: 'Sreejesh', skills: 'Robotics!'},
			{ name: 'Jyoti Prakash', skills:'HTML/CSS'}
		];

		$scope.nameNewDeveloper = '';

		// Private functions
		function _getRandomColor() {
			var letters = '0123456789ABCDEF'.split('');
			var color = '#';
			for (var i = 0; i < 6; i++ ) {
				color += letters[Math.round(Math.random() * 15)];
			}
			return color;
		}

		$scope.addItem = function() {
			$scope.developers.push({
				name: $scope.nameNewDeveloper,
				style: 'background-color:' + _getRandomColor() + ';vertical-align:middle;'
			});
			$scope.nameNewDeveloper = '';
		};

		$scope.removeItem = function(item) {
			var index = $scope.developers.indexOf(item);
			$scope.developers.splice(index, 1);
		};

		$scope.moveItemUp = function(item) {
			var index = $scope.developers.indexOf(item);
			$scope.developers.moveUp(index);
		};

		$scope.moveItemDown = function(item) {
			var index = $scope.developers.indexOf(item);
			$scope.developers.moveDown(index);
		};
	});
}());