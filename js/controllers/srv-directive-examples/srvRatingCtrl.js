/*globals
	angular
*/
(function(){
	'use strict';
	angular.module('srvApp')
		.controller('srvRatingCtrl', function($scope){
			$scope.rating = 1;

			$scope.saveRatingToServer = function(obj){
				$scope.rating = obj.rating;
			}
		});
}());