const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor (direct) {
		this.direct = (direct === false)? false : true;
	}

  encrypt(msg, key) {
   	if (msg === undefined || key === undefined) throw new Error;
   	msg = msg.toUpperCase();
   	key = key.toUpperCase();
   	let result = '';
   	let k;
   	let j = 0;

   	if (key.length < msg.length) key = key.repeat(Math.ceil(msg.length / key.length));

   	for (let i = 0; i < msg.length; i++){
   		if (msg[i].charCodeAt(0) < 65 || msg[i].charCodeAt(0) > 90){
				result += msg[i];   			
   		} else {
	   		k = msg[i].charCodeAt(0) + (key[j].charCodeAt(0) - 65);
   			if (k > 90) k = 64 + (k - 90);
   			result += String.fromCharCode(k);
	   		j++;
	   	}
   	}

   	return (this.direct)? result : result.split('').reverse().join('');
  }

  decrypt(msg, key) {
  	if (msg === undefined || key === undefined) throw new Error;
   	msg = msg.toUpperCase();
   	key = key.toUpperCase();
   	let result = '';
   	let k;
   	let j = 0;

   	if (key.length < msg.length) key = key.repeat(Math.ceil(msg.length / key.length));

   	for (let i = 0; i < msg.length; i++){
   		if (msg[i].charCodeAt(0) < 65 || msg[i].charCodeAt(0) > 90){
				result += msg[i];   			
   		} else {
	   		k = msg[i].charCodeAt(0) - (key[j].charCodeAt(0) - 65);
   			if (k < 65) k = 91 - (65 - k);
   			result += String.fromCharCode(k);
	   		j++;
	   	}
   	}

		return (this.direct)? result : result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
