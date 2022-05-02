/*
https://leetcode.com/problems/minimum-absolute-difference-in-bst/

Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

 

Example 1:


Input: root = [4,2,6,1,3]
Output: 1
Example 2:


Input: root = [1,0,48,null,null,12,49]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [2, 10^4].
0 <= Node.val <= 10^5
 

Note: This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/
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
 * @return {number}
 */
 var getMinimumDifference = function(root) {
  let prev = Infinity;
  let min = Infinity;
   
   const traverse = root => {
       if (root.left) traverse(root.left);
       min = Math.min(min, Math.abs(root.val - prev));
       prev = root.val;
       
       if (root.right) traverse (root.right);
   }
   
   traverse(root);
   return min;
}




