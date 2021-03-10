const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;

	let arr = members.map(elm => {return (typeof elm === 'string')?  (elm.trim() != '')? elm.trim()[0].toUpperCase() : '' : '' });

	return arr.sort().join('').trim();
};
