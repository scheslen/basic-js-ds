const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// function removeKFromList(/* l, k */) {
//   // Remove line below and write your code here
//   throw new NotImplementedError('Not implemented');
// }

function removeKFromList(l, k) {
  let i=0;
  let node = l;
  let prev = node;
  while (node !== null) {
    if (node.value === k) {
        if( node.next!==null){
            prev.next=node.next;
            node=node.next;
            if (i==0) l=node;
           }
         else{
           prev.next=null;
           node = null;
         }
      }
    else{
      prev = node;
      node = node.next;
    }
    i++;
  }
  return l;
}


module.exports = {
  removeKFromList
};
