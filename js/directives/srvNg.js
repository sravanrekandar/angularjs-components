/*globals
	angular
*/
angular.module('srvNg.config', []).value('srvNgConfig', {});
angular.module('srvNg.filters', ['srvNg.config']);
angular.module('srvNg.directives', ['srvNg.config']);
angular.module('srvNg', [
	'srvNg.filters',
	'srvNg.directives',
	'srvNg.config'
]);