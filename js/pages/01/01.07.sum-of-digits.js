/**
	Two numbers are input through the keyboard into two locations C and D. Write a program to interchange the contents of C and D.
*/
(function(undefined){
	'use strict';
	var enterTxt = document.getElementById('enter-num'),
		sumTxt = document.getElementById('sum'),
		resultBtn = document.getElementById('result');
		
	resultBtn.onclick = function(){
		var n,
			a1, a2, a3, a4, a5,
			sum = 0;
			
			n = Number(enterTxt.value);
			a1 = n%10;
			n = Math.floor(n/10);
			a2 = n%10;
			n = Math.floor(n/10);
			a3 = n%10;
			n = Math.floor(n/10);
			a4 = n%10;
			n = Math.floor(n/10);
			a5 = n%10;
			console.log(a1, a2, a3, a4, a5);
			sum = a1 + a2 + a3 + a4 + a5;
			sumTxt.value = sum;
	}
})();