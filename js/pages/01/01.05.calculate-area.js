/**
	Area & Perimeter of the rectangle, and the area & circumference of the circle
	Notes:
	Area of rectangle = width*height
	Perimeter of rectangle = 2*(width*height);
*/
(function(undefined){
	'use strict';
	
	var rectWiTxt = document.getElementById('rect-width'),
		rectHiTxt = document.getElementById('rect-height'),
		rectArea = document.getElementById('rect-Area'),
		rectPer = document.getElementById('rect-per');
		
	rectWiTxt.onkeyup = rectDetails;
	rectHiTxt.onkeyup = rectDetails;
	
	function rectDetails(){
		//console.log('test');
		var RectangleWidth,
			RectangleHeight,
			RectangleArea,
			RectanglePerimeter;
			
		RectangleWidth = Number(rectWiTxt.value);
		RectangleHeight = Number(rectHiTxt.value);
		rectArea.innerHTML = RectangleWidth*RectangleHeight;
		rectPer.innerHTML = 2*(RectangleWidth*RectangleHeight);
	}
}());