/*
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];
    if (cache[needed] >= 0) return [cache[needed], i]

    cache[nums[i]] = i;
  }

  return null;
};



/*
EXPLANATION

We'll use an object to hold values, and utilize it's constant lookup time
Iterate through array and define what number we need to add to current value by subtracting current value from target

If that needed number exists in the cache, we can access its index in the original array in its paired value
Then we can return an array of [cache[value], current index]
*/

var twoSumCommented = function (nums, target) {
  // Declare empty object to hold found values
  const cache = {};

  // Iterate through nums array
  for (let i = 0; i < nums.length; i++) {
    // Define what number we need to add to current value to reach target
    let needed = target - nums[i];
    // If the value is in cache, return it's value (which will be its index)
    if (cache[needed] >= 0) return [cache[needed], i]
    // Store current number as key, and its index as its value
    cache[nums[i]] = i;
  }
  // If not found, return null
  return null;
};