const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  throw new CustomError('Not implemented');


	
  if (sampleActivity === undefined || sampleActivity === null || typeof(sampleActivity) !== 'string' || sampleActivity === '') return false;

  let numActivity = Number(sampleActivity.trim()); 
  if (isNaN(numActivity) || numActivity === 0) return false;

  let t = Math.log2(MODERN_ACTIVITY/numActivity) / (0.693 / HALF_LIFE_PERIOD);

  return Math.ceil(t);





/*
  let k = 0.693/HALF_LIFE_PERIOD;
  let t = Math.log2(MODERN_ACTIVITY/numActivity) / k;

  return t;

  */
};
