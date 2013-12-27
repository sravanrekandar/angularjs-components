/*globals
	angular
*/
(function(){
	'use strict';
	// the dialog is injected in the specified controller
	angular.module('testApp').controller('addUserCtrl', function($scope, $dialog) {
		$scope.title = 'addUserCtrl';
				// For Modal
		$scope.opts = {
			backdrop: true,
			keyboard: true,
			backdropClick: true,
			templateUrl: $scope.modalPartial//,
			//controller: AddConstituentsDialogCtrl
		};

		$scope.openDialog = function(){
			var d = $dialog.dialog($scope.opts);
			d.open();
		};

	});
}());