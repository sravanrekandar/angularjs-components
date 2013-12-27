/*globals
	angular
*/
(function(){
	'use strict';
	angular.module('srvNg.directives').directive('srvTextHighlight', function(){
		return {
			restrict: 'A',
			scope:{
				filter: '=srvTextHighlight'
			},
			link: function(scope, iElement) {
				scope.elementText = iElement.text();
				scope.element = iElement;

				var highlight = function(){
					var htmlText = scope.elementText;
					var reg = new RegExp(scope.filter, 'gi');
					htmlText.replace(reg, 'SRAVAN');
					htmlText = htmlText.replace(reg,'<span style="background-color:#FFFF00;">' + scope.filter + '</span>');
					scope.element.html(htmlText);
				};
				
				scope.$watch('filter', highlight);
				highlight();
			}
		};
	});
}()); // End of global wrapper
