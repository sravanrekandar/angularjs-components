/*globals
	angular
*/
var rootPath = rootPath || '/angularjs-components/';
(function(){
	'use strict';
	angular.module('srvNg.directives').directive('srvColorPicker', function() {
		return {
			restrict: 'EA',
			require: '?ngModel',
			scope: {
				color: '=ngModel'
			},
			tranclude: true,
			templateUrl: rootPath + 'templates/srvColorPicker.html',
			replace: true,
			link: function(scope) {
				scope.updateVal = function(obj, key) {
					obj[key] = Number(obj[key]);
				};
			}
		};
	});
}()); // End of global wrapper
