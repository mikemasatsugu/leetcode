/*
https://leetcode.com/problems/valid-palindrome-ii/

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 

Constraints:

1 <= s.length <= 10^5
s consists of lowercase English letters.
*/


/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    
  function checkPalindrome(string, leftIdx, rightIdx) {
      while (leftIdx < rightIdx) {
          if (string[leftIdx] !== string[rightIdx]) return false;
          
          leftIdx += 1;
          rightIdx -= 1;
      }
      return true;
  }
  
  let left = 0;/**
  * @param {number[]} nums1
  * @param {number} m
  * @param {number[]} nums2
  * @param {number} n
  * @return {void} Do not return anything, modify nums1 in-place instead.
  */
 var merge = function(nums1, m, nums2, n) {
     let insertPositionOfNums1 = m + n - 1;
   m -= 1;
   n -= 1;
   while (n >= 0) {
     if (nums1[m] > nums2[n]) {
       nums1[insertPositionOfNums1] = nums1[m];
       m -= 1;
     } else {
       nums1[insertPositionOfNums1] = nums2[n];
       n -= 1;
     }
     insertPositionOfNums1 -= 1;
   }
 };
  let right = s.length - 1;
  
  while (left < right) {
      if (s[left] !== s[right]) return checkPalindrome(s, left, right - 1) || checkPalindrome(s, left + 1, right);
      
      left += 1;
      right -= 1;
  }
  
  return true;
};