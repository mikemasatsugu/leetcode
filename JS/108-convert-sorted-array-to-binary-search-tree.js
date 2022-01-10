/*
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

 

Example 1:


Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:


Input: nums = [1,3]
Output: [3,1]
Explanation: [1,3] and [3,1] are both a height-balanced BSTs.
 

Constraints:

1 <= nums.length <= 10^4
-104 <= nums[i] <= 10^4
nums is sorted in a strictly increasing order.
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums || !nums.length) return null;

  let mid = Math.floor(nums.length / 2);

  const node = new TreeNode(nums[mid]);

  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1));

  return node;
};



/*
EXPLANATION

Get the middle of the array and make it the root.
recursively do the same for the left half and the right half
  get the middle of the left half and make it left child of the root created in step 1
  get the middle of the right half and make it right child of the root created in step 1
*/



var sortedArrayToBSTCommented = function (nums) {
  // If nums is null or has no length, return null
  if (!nums || !nums.length) return null;
  // initialize middle index using Math.floor
  let mid = Math.floor(nums.length / 2);
  // create a new tree with the middle value of the array as the value
  const node = new TreeNode(nums[mid]);
  // Assign current node's left as evaluated result of invoking sortedArrayToBST on left half of array
  node.left = sortedArrayToBST(nums.slice(0, mid));
  // Assign current node's right as evaluated result of invoking sortedArrayToBST on right half of array
  node.right = sortedArrayToBST(nums.slice(mid + 1));
  // return resulting node
  return node;
};