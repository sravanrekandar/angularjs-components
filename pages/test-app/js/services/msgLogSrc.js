/*globals
	angular
*/
(function(undefined){
	'use strict';
	angular.module('testApp').factory('msgLogSrc', function(){
		var factory = {};

		factory.messages = [];

		factory.addMessage = function(msgText, msgType){
			factory.messages.push({
				text: msgText,
				type: msgType,
				time: new Date()
			});
		};

		factory.notify = function(msgText, msgType) {
			factory.addMessage(msgText, msgType);
		};

		factory.success = function(msgText, msgType) {
			factory.addMessage(msgText, msgType);
		};

		factory.warn = function(msgText, msgType) {
			factory.addMessage(msgText, msgType);
		};

		return factory;
	});
}());