const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	constructor() {
    this.depth = 0;
    this.current = 0;
  }

  calculateDepth(arr) {
    this.current++;
  	if (this.current > this.depth) this.depth = this.current;
  	let last = this.current;

  	for (let i = 0; i < arr.length; i++){
    	if (Array.isArray(arr[i])) this.calculateDepth(arr[i]);
   		this.current = last;
   	}

		if (last === 1) {
    	let result = this.depth;
  		this.depth = 0;
    	this.current = 0;
      return result;
    }
  }
 };
