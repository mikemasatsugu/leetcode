/*
https://leetcode.com/problems/binary-search/

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 10^4
-10^4 < nums[i], target < 10^4
All the integers in nums are unique.
nums is sorted in ascending order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let leftIdx = 0;
  let rightIdx = nums.length - 1;
  let midIdx

  while (leftIdx <= rightIdx) {
    midIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (nums[midIdx] === target) return midIdx;
    else if (nums[midIdx] < target) leftIdx = midIdx + 1;
    else if (nums[midIdx] > target) rightIdx = midIdx - 1;
  }

  return -1;
};


/*
EXPLANATION

We will start with pointers at both ends of the numbers array
We will iterate with a while loop
  assign mid index to the middle between left and right pointers
  if middle index value is the target, then return the index
  if the middle index is less than the target, then we need to look right of the middle index for greater values
  If the middle value is greater than the target, then we need to look left of the middle index for lesser values

If we exit the while loop without returning an index, then the target was not found in the array.
We can then return -1

*/



var searchCommented = function (nums, target) {
  // Initialize left index at 0
  let leftIdx = 0;
  // Initialize right index at end of nums
  let rightIdx = nums.length - 1;
  // Declare midIdx
  let midIdx

  // While left index is less than or equal to right index
  while (leftIdx <= rightIdx) {
    // Place midIdx between leftIdx and rightIdx
    midIdx = Math.floor((leftIdx + rightIdx) / 2);

    // If midIdx is the target, return the midIdx
    if (nums[midIdx] === target) return midIdx;
    // If midIdx is less than the target, cut left of mid (so lesser values are all gone)
    else if (nums[midIdx] < target) leftIdx = midIdx + 1;
    // If midIdx is greater than target, cut right of mid (so greater values are all gone)
    else if (nums[midIdx] > target) rightIdx = midIdx - 1;
  }
  // If mid is never target and left and right pass each other, then return -1
  return -1;
};