/*
https://leetcode.com/problems/invert-binary-tree/

Given the root of a binary tree, invert the tree, and return its root.

 

Example 1:


Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
Example 2:


Input: root = [2,1,3]
Output: [2,3,1]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null;

  nodeSwapper(root);
  invertTree(root.left);
  invertTree(root.right);

  return root
};

function nodeSwapper(node) {
  let stored = node.left;
  node.left = node.right;
  node.right = stored;
}


/*
EXPLANATION

We create a helper function 'nodeSwapper' to swap left and right children
In our main recursive function, we state our base case to return null if root is null

We swap the current node's children, then recursively call the main function on the swapped children
This will swap the children and move down each branch until we return null

We then return root after all recursive operation has finished
*/


var invertTreeCommented = function (root) {
  // Base case: If root is null, return null
  if (!root) return null;
  // Swap current node's children
  nodeSwapper(root);
  // Recursively call on left node
  invertTree(root.left);
  // Recursively call on right node
  invertTree(root.right);
  // Return root once all recursive operations have finished
  return root
};

function nodeSwapperCommented(node) {
  // Store left node in variable
  let stored = node.left;
  // Change left node to right node's value
  node.left = node.right;
  // Change right node to left's value BEFORE it was swapped
  node.right = stored;
}