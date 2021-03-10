const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	let num = 0;

	matrix.forEach(arr => {
		arr.forEach(elm => {
			if (elm === '^^') num++;
		})
	});

	return num;
};
