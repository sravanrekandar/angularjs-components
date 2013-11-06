/**
	If a five-digit number is input through the keyboard, write a program to reverse the number.
*/
(function(undefined){
	'use strict';
	var enterTxt = document.getElementById('enter-num'),
		revTxt = document.getElementById('revnum'),
		resultBtn = document.getElementById('result');
	console.log(revTxt);
	resultBtn.onclick = function(){
		var n,
			a1, a2, a3, a4, a5, rev;
			
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
			
			//rev = '' + a1 + a2 + a3 + a4 + a5;
			/* rev = a1;
			rev = rev * 10 + a2;
			rev = rev * 10 + a3;
			rev = rev * 10 + a4;
			rev = rev * 10 + a5; */
			
			rev = a1 * 10000 +
					a2 * 1000 +
					a3 * 100 +
					a4 * 10 +
					a5;
			
			revTxt.value = rev;
	}
})();