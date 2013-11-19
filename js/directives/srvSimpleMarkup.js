/*globals
	angular
*/
(function(){
	'use strict';
	angular.module('srvNg.directives').directive('srvSimpleMarkup', function(){
		return {
			restrict: 'E',
			link: function(scope, iElement) {
				var htmlText = iElement.html();
				// Html changes
				htmlText = '<div class="well"> <input type="text" value="' + htmlText + '"</div>';
				iElement.html(htmlText);
			}
		};
	});
}()); // End of global wrapper
