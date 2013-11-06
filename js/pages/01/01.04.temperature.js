/**
	Calculating Centigrades through Fahrenheit.
	Notes:
	1 Degree Fahrenheit = -17.222 Degrees Celsius.
	1 Degree Celsius = 33.8 Degree Fahrenheit.
*/
(function(undefined){
	'use strict';
	var fahTxt = document.getElementById('fah-degress'),
		cenTxt = document.getElementById('cen-degress'),
		resultBtn = document.getElementById('result');
		
	resultBtn.onclick = (function(){
		var fahrenheit,
			centigrade,
			result;
	
		fahrenheit = Number(fahTxt.value);
		cenTxt.value =  -17.222 * fahrenheit;
	});
}());