const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (date === undefined || date === null) return 'Unable to determine the time of year!';

	let date2 = new Date(String(date));
	if (date.getMonth() != date2.getMonth() || date.getDate() != date2.getDate()) throw new Error;

	let month = date.getMonth();

	if (month > 1 && month < 5) return 'spring';
	if (month > 4 && month < 8) return 'summer';
	if (month > 7 && month < 11) return 'fall';
	return 'winter';
};
