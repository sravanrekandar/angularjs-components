/*globals
	angular: true,
	myApp: true
*/
(function(){
	'use strict';
	myApp.directive('multiselect', ['$document', function($document){
		return {
			restrict: 'AE',
			require: '?ngModel',
			scope: {
				items: '=',
				ngModel: '='
			},
			transclude : true,
			templateUrl: 'templates/multiselect.html',
			replace: true,
			link: function(scope, element, attr){
				scope.selectedItems = scope.ngModel;
				scope.restrictSingle = (typeof attr.restrictSingle !== 'undefined');
				
				scope.defaultDisplayText = 'Select an Item';
				scope.displayText = scope.defaultDisplayText;
				scope.isOpen = false;

				/******** private Methods ********/
				function updateSelectedList() {
					angular.forEach(scope.selected , function(el) {
						angular.forEach(scope.items, function(elem, idx){
							var index;
							if(el[scope.uniqueId] === elem[scope.uniqueId]) {
								elem.selected = true;
								index = scope.selected .indexOf(el);
								scope.selected .splice(index, 1);
								scope.selected .splice(index, 0, elem);
							}
						});
					});
				}
				
				function updateDisplayText() {
					var str = '';
					if(scope.restrictSingle) {
						str = scope.selectedItems[0].name;
					} else if (scope.selectedItems.length > 0) {
						str = scope.selectedItems.length + ' item(s) selected';
					} else if(scope.selectedItems.length === 0) {
						str = scope.defaultDisplayText;
					}
					
					scope.displayText = str;
				}
				
				function addItem(item) {
					if(scope.restrictSingle) { // Incase of normal select
						scope.isOpen = false;
						angular.forEach(scope.items, function(el){
							el.selected = false;
						});
						item.selected = true;
						scope.selectedItems[0] = item;
					} else { // Incase of multi select
						if(scope.selectedItems.indexOf(item) === -1) {
							scope.selectedItems.push(item);
						}
					}
				}

				function removeItem(item) {
					var index = scope.selectedItems.indexOf(item);
					if(index !== -1) {
						scope.selectedItems.splice(index, 1);
					}
				}

				/******** Public Methods ********/
				scope.toggleSelect = function(item){
					if(item.selected) {
						addItem(item);
					} else {
						removeItem(item);
					}

					updateDisplayText();
				};
				
				scope.toggleDropdown = function(){
					scope.isOpen = !scope.isOpen;
				};
				
				$document.bind('click', function(evt) {
					var target = angular.element(evt.target).closest(element);
					if(target.length === 0){
						scope.isVisible = false;
						scope.$apply();
					}
				});

				// Init
				updateSelectedList();
			}
		};
	}]);
}()); // end of global wrapper