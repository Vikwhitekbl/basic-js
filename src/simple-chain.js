const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  currentChain: [],
  getLength() {
    return this.currentChain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.currentChain.push(`( ${value === undefined ? '' : value} )`);
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.currentChain.length
    ) {
      this.currentChain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.currentChain.splice(position - 1, 1);
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    this.currentChain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    const connectedChain = this.currentChain.join('~~');
    this.currentChain = [];
    return connectedChain;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
