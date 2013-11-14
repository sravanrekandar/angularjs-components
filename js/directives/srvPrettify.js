/*globals
	angular
*/
(function(){
	'use strict';
	angular.module('srvNg.directives').directive('srvPrettify', function(){
		return {
			restrict: 'EA',
			scope: {
				fileName: '='
			},
			controller: ['$scope', '$http', function($scope, $http) {
				$scope.getMarkup = function(filePath, callback) {
					$http({
							method: 'GET',
							url: filePath
						}).success(function(data) {
							data = data.replace(/</g,'&lt;');
							data = data.replace(/\t/g,'    ');
							callback(data);
						});
				};
			}],
			link: function(scope, iElement, iAttrs) {
				scope.insertMarkup = function(markup){
					var htmlText = '<pre class="prettyprint linenums">' + markup + '</pre>';
					iElement.html(htmlText);
					window.prettyPrint && window.prettyPrint();
				};

				if(typeof scope.fileName !== 'undefined') {
					scope.getMarkup(scope.fileName, scope.insertMarkup);
				} else {
					scope.insertMarkup(iElement.html());
				}

				iElement.ready(function(){
					window.prettyPrint && window.prettyPrint();
				});
			}
		};
	});
}()); // End of global wrapper
