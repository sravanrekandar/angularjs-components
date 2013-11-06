(function(){
	'use strict';
	window.myApp.controller('Home',function($scope, HomeService){
		$scope.contentHeaderUrl = 'partials/header.html';
		$scope.codePartialUrl = 'partials/code.html';
	
		$scope.menus = [];
		$scope.codeTabs = [];
		$scope.currentCodeTab = {};
		$scope.activeMenu = null;
		$scope.prevPage = null;
		$scope.nextPage = null;

		// Private methods
		function _updateCodeTabs() {
			var files = $scope.activeMenu.files,
				codeTabs = [];
			for(var i = 0; i < files.length; i++) {
				codeTabs.push({
					title: files[i].substring(files[i].lastIndexOf('/') + 1),
					path: files[i],
					isHTML: files[i].substr(files[i].lastIndexOf('.')+1) === 'html'
				});
			}

			$scope.codeTabs = codeTabs;
			$scope.activateCodeTab($scope.codeTabs[0]);
		}

		function _getActiveMenu() {
			var i,
				activemenu = null,
				menus = $scope.menus,
				currentPage = window.location.hash.substring(window.location.hash.lastIndexOf('/')+1);

			for(i = 0; i < menus.length; i++) {
				if(menus[i].title === currentPage) {
					activemenu = menus[i];
					break;
				}
			}

			activemenu = (activemenu === null) ? menus[0] : activemenu;

			return activemenu;
		}

		function _updateNavLinks(activeMenu) {
			var menus = $scope.menus;
			var index = $scope.menus.indexOf(activeMenu);
			$scope.prevPage = (index >= 0) ? menus[index - 1] : menus[menus.length - 1];
			$scope.nextPage = (index <= menus.length) ? menus[index + 1] : menus[0];
		}

		// Public Methods
		$scope.init = function(){
			$scope.navType = 'pills';
			
			HomeService.getPages(function(resposedata){
				$scope.menus = resposedata;
				$scope.makeActive(_getActiveMenu());
			});
		};

		// For menu
		$scope.makeActive = function(menu) {
			$scope.activeMenu = menu;
			_updateNavLinks($scope.activeMenu);
			_updateCodeTabs();
		};

		$scope.activateCodeTab = function(tab) {
			$scope.currentCodeTab = tab;
		};
		//$scope.$watch('activeMenu', _prepareCodeTabs);
		//$scope.$watch('currentCodeTab', _prepareCodeTabs);

		

		$scope.init();
	});
}());