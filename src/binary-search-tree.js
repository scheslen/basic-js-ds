const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/



// class BinarySearchTree {
//   root() {
//     // Remove line below and write your code here
//     throw new NotImplementedError('Not implemented');
//   }

//   add(/* data */) {
//     // Remove line below and write your code here
//     throw new NotImplementedError('Not implemented');
//   }

//   find(/* data */) {
//     // Remove line below and write your code here
//     throw new NotImplementedError('Not implemented');
//   }

//   has(/* data */) {
//     // Remove line below and write your code here
//     throw new NotImplementedError('Not implemented');
//   }

//   remove(/* data */) {
//     // Remove line below and write your code here
//     throw new NotImplementedError('Not implemented');
//   }

//   min() {
//     // Remove line below and write your code here
//     throw new NotImplementedError('Not implemented');
//   }

//   max() {
//     // Remove line below and write your code here
//     throw new NotImplementedError('Not implemented');
//   }
// }


class BinarySearchTree {

  constructor(V){
    this.rnode = null;
  }

  root() {
      return this.rnode;
  }

  add(V) {

        this.rnode = addnode(this.rnode,V);

        function addnode(node){
          if (!node){
            return new Node(V);
          }

          if (node.data === V){
            return node;
          }

          if (node.data > V)
            node.left = addnode(node.left,V)
          else
             node.right = addnode(node.right,V);

          return node;
        }
      }

    has(V) {
        return hasnode(this.rnode,V);

        function hasnode(node,V){

          if (!node) return false;
          if (node.data === V) return true;

          return (node.data > V) ? hasnode(node.left,V) : hasnode(node.right,V);

        }
    }

    find(V) {

        return findnode(this.rnode,V);

        function findnode(node,V){

          if (!node) return null;

          if (node.data === V) return node;

          return (node.data > V) ? findnode(node.left,V) : findnode(node.right,V);

        }
    }

    remove(V) {
       this.rnode=remnode(this.rnode,V);

       function remnode(node,V){

        if (!node) return null;

        if (V < node.data ) {
            node.left=remnode(node.left,V);
            return node;
        }
        else if (V > node.data ) {
            node.right=remnode(node.right,V);
            return node;
        }
        else{

          if (!node.left && !node.right) return null;

          if(!node.left){
             node=node.right;
             return node;
           }

          if(!node.right){
              node=node.left;
              return node;
           }

          let minRight=node.right;
          while (minRight.left){
              minRight=minRight.left;
          }

          node.data=minRight.data;
          node.right = remnode(node.right,minRight.data);

        return node;
       }
      }
    }

    min() {
      if(!this.rnode) return;
      let node=this.rnode;
      while(node.left){
        node=node.left;
      }
      return node.data;
    }

    max() {
      if(!this.rnode) return;
      let node=this.rnode;
      while(node.right){
        node=node.right;
      }
      return node.data;
    }
  }

module.exports = {
  BinarySearchTree
};