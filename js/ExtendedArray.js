(function(){
	'use strict';
	Array.prototype.moveUp = function(index) {
		var _this = this,
			temp;

		if(index <= 0 || index >= _this.length) {
			// Wrong index
			return false;
		}

		temp = this[index];
		_this[index] = _this[index-1];
		_this[index-1] = temp;
	};

	Array.prototype.moveDown = function(index) {
		var _this = this,
			temp;

		if(index < 0 || index >= _this.length-1) {
			// Wrong index
			return false;
		}

		temp = this[index];
		_this[index] = _this[index+1];
		_this[index+1] = temp;
	};
}());