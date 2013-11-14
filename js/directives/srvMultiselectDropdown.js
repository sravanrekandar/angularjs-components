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
                ngModel: '=',
                onSelectionChange: '&',
                defaultText: '@'
            },
            transclude : true,
            templateUrl: rootPath + 'templates/srvMultiselectdropdown.html',
            replace: true,
            link: function(scope, iElement, iAttrs){
                scope.selectedItems = scope.ngModel;
                scope.restrictsingle = (typeof iAttrs.restrictSingle !== 'undefined');
                
                scope.defaultDisplayText = iAttrs.defaultText || 'Select an Item';
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
                    if(scope.restrictsingle) {
                        str = scope.selectedItems[0].name;
                    } else if (scope.selectedItems.length > 0) {
                        str = scope.selectedItems.length + ' item(s) selected';
                    } else if(scope.selectedItems.length === 0) {
                        str = scope.defaultDisplayText;
                    }
                    
                    scope.displayText = str;
                }
                
                function addItem(item) {
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
                }

                function removeItem(item) {
                    var index = scope.selectedItems.indexOf(item);
                    if(index !== -1) {
                        scope.selectedItems.splice(index, 1);
                    }
                }

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
                
                // Close dropdown when user cliks elsewhere
                $document.bind('click', function(evt) {

                    var target = angular.element(evt.target).closest(iElement);

                    if(target.length === 0) {
                        scope.isOpen = false;
                        scope.$apply();
                    }
                });


                // Init
                updateSelectedList();
            }
        };
    }]);
}()); // end of global wrapper