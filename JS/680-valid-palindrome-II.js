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
  
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
      if (s[left] !== s[right]) return checkPalindrome(s, left, right - 1) || checkPalindrome(s, left + 1, right);
      
      left += 1;
      right -= 1;
  }
  
  return true;
};