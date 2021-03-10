const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    let str = (value === undefined)? '( )' : `( ${value} )`;
    this.arr.push(str);
    return this;
  },

  removeLink(position) {
    if (position > this.arr.length || position < 1){
      this.arr = [];
      throw new Error;
    } 
    this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;  
  },

  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
