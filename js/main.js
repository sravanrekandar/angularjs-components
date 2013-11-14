(function($, undefined) {
	'use strict';

	$('body').on('click', 'a[role="tab"]', function(e) {
		e.preventDefault();
		$(this).tab('show');
	});

}(jQuery)); // End of global wrapper