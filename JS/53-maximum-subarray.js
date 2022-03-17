/*
https://leetcode.com/problems/maximum-subarray/

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
 const maxSubArray = (nums) => {
  let currentSubArraySum = nums[0];
  let maxSubArraySum = nums[0];
  
  for (let i = 1 ; i < nums.length ; i++) {
      if (currentSubArraySum < 0) currentSubArraySum = 0;
      currentSubArraySum += nums[i];
      maxSubArraySum = Math.max(maxSubArraySum, currentSubArraySum);
  }
  return maxSubArraySum;
};




/*
EXPLANATION

Kadane's Algorithm - 
Initialize 2 integer variables. Set both of them equal to the first value in the array.

currentSubarray will keep the running count of the current subarray we are focusing on.
maxSubarray will be our final return value. Continuously update it whenever we find a bigger subarray.
Iterate through the array, starting with the 2nd element (as we used the first element to initialize our variables)
For each number, add it to the currentSubArraySum we are building. If currentSubArraySum becomes negative, we know it isn't worth keeping, so throw it away
Remember to update maxSubArraySum every time we find a new maximum.
*/