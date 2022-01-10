/*
https://leetcode.com/problems/balanced-binary-tree/

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.


Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true
 

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 10^4
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let balanced = true;

  function findHeight(node) {
    if (!node) return 0;
    if (balanced === false) return; // optimized early exit

    let leftHeight = findHeight(node.left);
    let rightHeight = findHeight(node.right);

    let heightDiff = Math.abs(leftHeight - rightHeight);

    if (heightDiff > 1) balanced = false;

    return Math.max(leftHeight, rightHeight) + 1;
  }

  findHeight(root);
  return balanced;
};



/*
EXPLANATION

First we declare a balanced function that defaults to true
Uses a helper function to find the node depths.
If the height difference of left or right is greater than one, we will short circuit and reassign balanced to false

The function will go on to return the depth for its recursive calls until the height of the individual node is 0

*/


var isBalancedCommented = function (root) {
  // initialize balanced variable, start as true
  let balanced = true;

  // Declare recursive helper function findHeight
  function findHeight(node) {
    // Base case: if node is null, return 0;
    if (!node) return 0;
    // Optimize by exiting early if balanced is ever false
    if (balanced === false) return; // optimized early exit

    // execute findHeight in left and right nodes to find their depth
    let leftHeight = findHeight(node.left);
    let rightHeight = findHeight(node.right);

    // Find the difference in height be taking the absolute value of one height minus the other
    let heightDiff = Math.abs(leftHeight - rightHeight);
    // If the height difference is greater than one, reassign balanced to false
    if (heightDiff > 1) balanced = false;

    // Return the max depth plus one (for finding depth, not for reassigning balanced boolean)
    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Execute findHeight on root node
  findHeight(root);
  // return balanced
  return balanced;
};