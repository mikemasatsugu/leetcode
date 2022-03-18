/*
https://leetcode.com/problems/range-sum-of-bst/

Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

 

Example 1:


Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
Example 2:


Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
 

Constraints:

The number of nodes in the tree is in the range [1, 2 * 104].
1 <= Node.val <= 10^5
1 <= low <= high <= 10^5
All Node.val are unique.
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 function rangeSumBST(root, low, high) {
  let sum = 0;
  
  function dfs(node) {
      if (node) {
          if (low <= node.val && high >= node.val) sum += node.val;
          if (low < node.val) dfs(node.left);
          if (high > node.val) dfs(node.right);
      }
  }
  
  dfs(root);
  return sum;
};




