const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
  let separator = options.additionSeparator || '|';
  let num = options.additionRepeatTimes || 1;
  let result = '';
  let arr = [];
  let elm = (options.addition === undefined)? '' : String(options.addition);
  for (let i = 0; i < num; i++) arr.push(elm);
  result = arr.join(separator) || '';
	str += result;

	arr = [];
  num = options.repeatTimes || 1;
	for (let i = 0; i < num; i++) arr.push(str);
	separator = options.separator || '+';
	return arr.join(separator);
};
  
