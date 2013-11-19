/*globals
	angular,
	srvD3
*/
var rootPath = rootPath || '/angularjs-components/';
(function(){
	'use strict';
	angular.module('srvNg.directives').directive('srvD3Test', function() {
		return {
			restrict: 'EA',
			require: '?ngModel',
			scope: {
				data: '=ngModel'
			},
			controller: function() {
				//.. code to update the chart on model change
			},
			//replace: true,
			link: function(scope, iElement) {
				var canvas = srvD3.createPieChart(scope.data, iElement);
				angular.element(iElement).append(canvas);

				scope.canvas = canvas;
			}
		};
	});
}()); // End of global wrapper