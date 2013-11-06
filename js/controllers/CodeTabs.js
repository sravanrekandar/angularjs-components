(function(){
	'use strict';
	window.myApp.controller('CodeTabs', function($scope){
		$scope.tabs = $scope.$parent.activeMenu.files;
	});
}());