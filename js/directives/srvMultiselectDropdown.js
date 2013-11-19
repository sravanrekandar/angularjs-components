/*globals
    angular
*/
var rootPath = rootPath || '/angularjs-components/';
(function(){
    'use strict';
    angular.module('srvNg.directives').directive('srvMultiselectDropdown', ['$document', function($document){
        return {
            restrict: 'AE',
            require: '?ngModel',
            scope: {
                items: '=',
                selectedItems: '=ngModel',
                onSelectionChange: '&',
                defaultText: '@'
            },
            transclude : true,
            templateUrl: rootPath + 'templates/srvMultiselectdropdown.html',
            replace: true,
            link: function(scope, iElement, iAttrs){
                /******** private Methods ********/
                var updateDisplayText = function () {
                    var str = '';
                    if(scope.restrictsingle) {
                        str = scope.selectedItems[0].name;
                    } else if (scope.selectedItems.length > 0) {
                        str = scope.selectedItems.length + ' item(s) selected';
                    } else if(scope.selectedItems.length === 0) {
                        str = scope.defaultDisplayText;
                    }
                    
                    scope.displayText = str;
                },
                addItem = function (item) {
                    if(scope.restrictsingle) { // Incase of normal select
                        scope.isOpen = false;
                        angular.forEach(scope.items, function(el) {
                            el.selected = false;
                        });
                        item.selected = true;
                        scope.selectedItems[0] = item;
                    } else { // Incase of multi select
                        if(scope.selectedItems.indexOf(item) === -1) {
                            scope.selectedItems.push(item);
                        }
                    }
                },
                removeItem = function (item) {
                    var index = scope.selectedItems.indexOf(item);
                    if(index !== -1) {
                        scope.selectedItems.splice(index, 1);
                    }
                },
                hideDropDown = function(evt) {
                    var target = angular.element(evt.target).closest(iElement);
                    if(target.length === 0) {
                        scope.isOpen = false;
                        scope.$apply();
                    }
                };

                scope.restrictsingle = (typeof iAttrs.restrictSingle !== 'undefined');
                scope.defaultDisplayText = iAttrs.defaultText || 'Select an Item';
                scope.displayText = scope.defaultDisplayText;
                scope.isOpen = false;

                /******** Public Methods ********/
                scope.toggleSelect = function(item) {
                    if(item.selected) {
                        addItem(item);
                    } else {
                        removeItem(item);
                    }

                    updateDisplayText();
                };
                
                scope.toggleDropdown = function() {
                    scope.isOpen = !scope.isOpen;
                };

                // Init
                $document.bind('click', hideDropDown);
            }
        };
    }]);
}()); // end of global wrapper