const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {    
    return this.chain.length;
  },
  addLink(value) {
    if(arguments.length === 0){
      this.chain.push('');
      console.log(this);
    } else {
      this.chain.push(value); 
    }       
    return this;
  },
  removeLink(position) {
    if(position !== Number(position)|| position !== Math.floor(position) || position < 1 || position - 1 >= this.chain.length){
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    } else {
      this.chain.splice(position-1, 1);
      return this;
    }    
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finalString = '';
    for (let i = 0; i < this.getLength(); i++){
      if (i === this.getLength() - 1){
        finalString += `( ${this.chain[i]} )`;
      } else {
        finalString += `( ${this.chain[i]} )~~`;
      }
      
    }
    this.chain = []; 
    console.log(finalString);
    return finalString;
  }
};


module.exports = {
  chainMaker
};
