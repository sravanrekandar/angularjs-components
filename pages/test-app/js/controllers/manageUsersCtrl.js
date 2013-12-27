/*globals
	angular
*/
(function(undefined){
	'use strict';
	angular.module('testApp').controller('manageUsersCtrl', function($scope, usersSrc, msgLogSrc){
		$scope.users = usersSrc.items;
		$scope.unSelectUser = function(user){
			usersSrc.removeItem(user);
			msgLogSrc.warn(user.title + ' been removed.');
		};
		$scope.viewUser = function(user) {
			//..
		};
	});
}());