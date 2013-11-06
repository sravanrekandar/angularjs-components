(function(undefined){
	'use strict';
	var tleTxt = document.getElementById('tel-marks'),
		engTxt = document.getElementById('eng-marks'),
		matTxt = document.getElementById('mat-marks'),
		sciTxt = document.getElementById('sci-marks'),
		socTxt = document.getElementById('soc-marks'),
		perTxt = document.getElementById('percentage'),
		totalTxt = document.getElementById('total-marks'),
		resultBtn = document.getElementById('result');
		
		resultBtn.onclick = (function(){
			var telugu,
				english,
				maths,
				science,
				social,
				percentage,
				total;
				
			telugu = Number(tleTxt.value);
			english = Number(engTxt.value);
			maths = Number(matTxt.value);
			science = Number(sciTxt.value);
			social = Number(socTxt.value);
			total = telugu + english + maths + science + social;
			percentage = total*100/500;

			perTxt.value = percentage;
			totalTxt.value = total;
		});
}());