(function(){
	'use strict';
	angular.module('srvApp').controller('examplePagesCtrl', function($scope){
		$scope.examplePartials = [
			'/angularjs-components/partials/directives/srv-ng-setup.html',
			'/angularjs-components/partials/directives/srv-simple-markup-example.html',
			'/angularjs-components/partials/directives/srv-range-example.html',
			'/angularjs-components/partials/directives/srv-color-picker-example.html',
			'/angularjs-components/partials/directives/srv-multiselect-dropdown-example.html',
			'/angularjs-components/partials/directives/srv-prettify-example.html',
			'/angularjs-components/partials/directives/srv-d3-test-example.html'
		];
	});
}());