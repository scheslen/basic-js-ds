const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  aStack=[];
 
  push(element) {
    this.aStack[this.aStack.length]=element;
    return
  }

  pop() {
    let val=this.aStack[this.aStack.length-1];
    this.aStack=this.aStack.slice(0,this.aStack.length-1);
    return val;
  }

  peek() {
    return this.aStack[this.aStack.length-1];
  }
}


module.exports = {
  Stack
};
