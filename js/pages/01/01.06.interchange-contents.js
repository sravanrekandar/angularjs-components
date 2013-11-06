/**
	Two numbers are input through the keyboard into two locations C and D. Write a program to interchange the contents of C and D.
*/
(function(undefined){
	'use strict';
	var firstTxt = document.getElementById('first-value'),
		secondTxt = document.getElementById('second-value'),
		resultBtn = document.getElementById('result');
		
	resultBtn.onclick = function(){
		var temp;
		temp = firstTxt.value;
		firstTxt.value = secondTxt.value;
		secondTxt.value = temp;
	}
})();