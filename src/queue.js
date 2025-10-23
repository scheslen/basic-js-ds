const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
// class Queue {
//   getUnderlyingList() {
//     // Remove line below and write your code here
//     throw new NotImplementedError('Not implemented');
//   }

//   enqueue(/* value */) {
//     // Remove line below and write your code here
//     throw new NotImplementedError('Not implemented');
//   }

//   dequeue() {
//     // Remove line below and write your code here
//     throw new NotImplementedError('Not implemented');
//   }
// }

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.head=null;
    this.length=0;
  }


  getUnderlyingList() {
  return this.head;
  }

  enqueue(V) {
   if (this.length===0){
    this.head=new ListNode(V);
   }
   else{
    let node=this.head;
    while (node.next) {
         node=node.next;
    }
    node.next=new ListNode(V);
   }

   this.length++;
   return;
  }

  dequeue() {
   let val=this.head.value;
   this.head=this.head.next;
   this.length--;
   return val;
  }
}

module.exports = {
  Queue
};
