/*globals
	angular
*/
var rootPath = rootPath || '/angularjs-components/';
(function(){
	'use strict';
	angular.module('srvNg.directives').directive('srvTypeahead', function($compile) {
		return {
			restrict: 'E',
			scope: {
				items: '=',
				selectedItems: '='
			},
			tranclude: true,
			templateUrl: rootPath + 'templates/srvTypeahead.html',
			replace: true
		};
	});
}()); // End of global wrapper
