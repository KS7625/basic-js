const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
//  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let newArr = [];
  let push = true;
  let double = false;
  let wasPushed = false;



//                    input: [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],
  //                  output: [1, 2, 3, 4, 5]




  arr.forEach(elm  => {
		switch (elm) {
	  	case '--discard-next':
    		push = false;
  			double = false;
	    	break;

		  case '--discard-prev':
    		push = true;
  			double = false;
    		if (wasPushed) newArr = newArr.splice(0, newArr.length - 1);
  	  	break;

		  case '--double-next':
        push = true;
  			double = true;
	    	break;

		  case '--double-prev':
        push = true;
  			double = false;
    		if (wasPushed) newArr.push(newArr[newArr.length - 1]);
	    	break;

		  default:
    		if (push) {
    			newArr.push(elm);
    			if (double) newArr.push(elm);
    			wasPushed = true;
    		} else {
    			wasPushed = false;
    		}
    		push = true;
  			double = false;
    		break;
		}
  });

  return newArr;
};
