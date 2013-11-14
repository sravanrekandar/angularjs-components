/*globals
	angular
*/
(function(){
	'use strict';
	angular.module('srvNg.directives').directive('srvSimpleMarkup', function(){
		return {
			restrict: 'E',
			link: function(scope, element, attrs) {
				var htmlText = element.html();
				// Html changes
				htmlText = '<div class="well"> <input type="text" value="' + htmlText + '"</div>';
				element.html(htmlText);
			}
		};
	});

}()); // End of global wrapper
