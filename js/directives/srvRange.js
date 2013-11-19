/*globals
	angular
*/
(function(){
	'use strict';
	angular.module('srvNg.directives').directive('srvRange', function() {
		var rangeTemplate  = [
			'<div>',
			'<input type="text" ng-model="rangeValue" min="{{minValue}}" max="{{maxValue}}" required>',
			'<input type="range" min="{{minValue}}" max="{{maxValue}}" ng-model="rangeValue" ng-change="updateVal()"/>',
			'</div'
		].join('');

		return {
			restrict: 'EA',
			scope: {},
			compile: function(iElement) {
				var htmlText = iElement.html(),
					value = Number(htmlText),
					min = 1,
					max = 100;

				value = isNaN(value) ? 0 : Number(value);
				value = value > max ? max : value;
				value = value < min ? min : value;

				// Html changes
				htmlText = angular.element(rangeTemplate);
				iElement.html(htmlText);

				return function(scope) {
					scope.rangeValue = value;
					scope.minValue = min;
					scope.maxValue = max;

					scope.updateVal = function() {
						//console.log(typeof scope.rangeValue); // string
						scope.rangeValue = Number(scope.rangeValue);
					};
				};
			}
		};
	});

}()); // End of global wrapper
