(function(undefined){
	'use strict';
	var basicTxt = document.getElementById('basic-salary'),
		daTxt = document.getElementById('da'),
		hraTxt = document.getElementById('hra'),
		grossTxt = document.getElementById('gross'),
		resultBtn = document.getElementById('result');
		
		resultBtn.onclick = (function(){
			
			var basic,
				da,
				hra,
				gross;
				
				basic = Number(basicTxt.value);
				
				da = basic*(40/100); //40% of base salary
				hra = basic*(20/100); //20% of base salary
				gross = basic+da+hra; // gross salary
				
				daTxt.value = da;
				hraTxt.value = hra;
				grossTxt.value = gross;
			
		});
	
}());