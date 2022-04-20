/*
https://leetcode.com/problems/spiral-matrix/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  const cache = [];
  
  while(matrix.length) {
      // Push elements of first array to cache
      cache.push(...matrix.shift());
      
      // Push all last values of each array to cache
      for (const arr of matrix) {
          if (!arr.length) break;
          cache.push(arr.pop());
      };
      
      // Push last array reversed to cache
      cache.push(...(matrix.pop() || []).reverse());
      
      // Traverse arrays in reverse order and push first values to cache
      for (let i = matrix.length - 1 ; i >= 0 ; i--) {
          if (matrix[i][0] === undefined) break;
          cache.push(matrix[i].shift());
      }
  }
  
  return cache;
};