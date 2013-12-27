/*globals
	angular
*/
(function(){
	'use strict';
	angular.module('srvApp')
		.controller('srvTextHighLightCtrl', ['$scope', function($scope){
			$scope.myText = 'sample';
			$scope.desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
		}]);
}());