/**
* Author: SRAVANREKANDAR
* Last Modified :20131106
*/

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
				scope.isMultiselect = (typeof attr.multiselect !== 'undefined');
				
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
					if(!scope.isMultiselect) {
						str = scope.selectedItems[0].name;
					} else if (scope.selectedItems.length > 0) {
						str = scope.selectedItems.length + ' item(s) selected';
					} else if(scope.selectedItems.length === 0) {
						str = scope.defaultDisplayText;
					}
					
					scope.displayText = str;
				}
				
				function addItem(item) {
					if(!scope.isMultiselect) { // Incase of normal select
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
				};

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
				
				

				element.bind('click', function(event) {
					event.stopPropagation();
				});

				$document.bind('click', function(){
					scope.isOpen = false;
					scope.$apply();
				});
			}
		};
	}]);
}()); // end of global wrapper