/*globals
	angular
*/
(function(){
	'use strict';
	angular.module('srvApp')
		.controller('srvTypeaheadCtrl', ['$scope', function($scope){
			$scope.currentItem = undefined;
			$scope.selectedStates = [];
			$scope.states = [{'name':'Alabama','id':'Alabama'},{'name':'Alaska','id':'Alaska'},{'name':'Arizona','id':'Arizona'},{'name':'Arkansas','id':'Arkansas'},{'name':'California','id':'California'},{'name':'Colorado','id':'Colorado'},{'name':'Connecticut','id':'Connecticut'},{'name':'Delaware','id':'Delaware'},{'name':'Florida','id':'Florida'},{'name':'Georgia','id':'Georgia'},{'name':'Hawaii','id':'Hawaii'},{'name':'Idaho','id':'Idaho'},{'name':'Illinois','id':'Illinois'},{'name':'Indiana','id':'Indiana'},{'name':'Iowa','id':'Iowa'},{'name':'Kansas','id':'Kansas'},{'name':'Kentucky','id':'Kentucky'},{'name':'Louisiana','id':'Louisiana'},{'name':'Maine','id':'Maine'},{'name':'Maryland','id':'Maryland'},{'name':'Massachusetts','id':'Massachusetts'},{'name':'Michigan','id':'Michigan'},{'name':'Minnesota','id':'Minnesota'},{'name':'Mississippi','id':'Mississippi'},{'name':'Missouri','id':'Missouri'},{'name':'Montana','id':'Montana'},{'name':'Nebraska','id':'Nebraska'},{'name':'Nevada','id':'Nevada'},{'name':'New Hampshire','id':'New Hampshire'},{'name':'New Jersey','id':'New Jersey'},{'name':'New Mexico','id':'New Mexico'},{'name':'New York','id':'New York'},{'name':'North Dakota','id':'North Dakota'},{'name':'North Carolina','id':'North Carolina'},{'name':'Ohio','id':'Ohio'},{'name':'Oklahoma','id':'Oklahoma'},{'name':'Oregon','id':'Oregon'},{'name':'Pennsylvania','id':'Pennsylvania'},{'name':'Rhode Island','id':'Rhode Island'},{'name':'South Carolina','id':'South Carolina'},{'name':'South Dakota','id':'South Dakota'},{'name':'Tennessee','id':'Tennessee'},{'name':'Texas','id':'Texas'},{'name':'Utah','id':'Utah'},{'name':'Vermont','id':'Vermont'},{'name':'Virginia','id':'Virginia'},{'name':'Washington','id':'Washington'},{'name':'West Virginia','id':'West Virginia'},{'name':'Wisconsin','id':'Wisconsin'},{'name':'Wyoming','id':'Wyoming'}];
		}]);
}());