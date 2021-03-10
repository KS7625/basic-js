const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	let num = 2**disksNumber - 1;
	let t = Math.floor(num / (turnsSpeed / 3600));

	return { 'turns': num, 'seconds': t }
};
