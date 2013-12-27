/*globals
	angular
*/
(function(undefined){
	'use strict';
	angular.module('testApp').controller('usersCtrl', function($scope, $modal, usersSrc, msgLogSrc){
		$scope.title = 'users Ctrl';
		$scope.users = usersSrc.items;

		$scope.selectUser = function(user) {
			usersSrc.addItem(user);
			msgLogSrc.success('A new user ' + user.name + ' been added.');
		};

		$scope.addNewUser = function() {
			var modalInstance = $modal.open({
				templateUrl: 'partials/addUsers.html',
				//controller: ModalInstanceCtrl,
				resolve: {
					items: function () {
						return $scope.items;
					}
				}
			});
		};
	});
}());