/*globals
	angular
*/
(function(undefined){
	'use strict';
	angular.module('testApp').controller('messageBoardCtrl', function($scope, msgLogSrc){
		$scope.title = 'Message Board Controller';
		$scope.messages = msgLogSrc.messages;
	});
}());