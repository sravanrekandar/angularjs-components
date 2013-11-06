(function(undefined){
	'use strict';
	var kmTxt = document.getElementById('enter-km'),
		metrsTxt = document.getElementById('meters'),
		ftTxt = document.getElementById('feet'),
		inTxt = document.getElementById('inches'),
		cmTxt = document.getElementById('centimeters'),
		resultBtn = document.getElementById('result');
		
		resultBtn.onclick = (function(){
			
			var kms,
				meters,
				fts,
				inches,
				cms;
			kms = Number(kmTxt.value);
			meters = 1000 * kms;
			fts = 3280 * kms;
			inches = 39360 * kms;
			cms = 100000 * kms;
			
			metrsTxt.value = meters;
			ftTxt.value = fts;
			inTxt.value = inches;
			cmTxt.value = cms;
			
		});
	
}());