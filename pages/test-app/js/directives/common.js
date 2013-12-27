/*globals
	angular
*/
var rootPath = rootPath || '/angular-test-app/';
(function(){
	'use strict';
	angular.module('testApp')
		.directive('navBar', function(){
			return {
				restrict: 'E',
				replace: true,
				templateUrl: rootPath + 'partials/navbar.html'
			};
		}).directive('footerBar', function(){
			return {
				restrict: 'E',
				replace: true,
				templateUrl: rootPath + 'partials/footerBar.html'
			};
		}).directive('messageLog', function(){
			return {
				restrict: 'E',
				replace: true,
				templateUrl: rootPath + 'partials/messageLog.html',
				controller: 'messageBoardCtrl'
			};
		}).directive('usersGrid', function(){
			return {
				restrict: 'E',
				replace: true,
				templateUrl: rootPath + 'partials/usersGrid.html',
				controller: 'usersCtrl'
			};
		}).directive('manageUsers', function(){
			return {
				restrict: 'E',
				replace: true,
				templateUrl: rootPath + 'partials/manageUsers.html',
				controller: 'manageUsersCtrl'
			};
		});
}());