/*https://leetcode.com/problems/valid-anagram/

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
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const frequency = {}
  
  for (let i = 0 ; i < s.length ; i++) {
      frequency[s[i]] = frequency[s[i]] + 1 || 1;
  };
  console.log(frequency)
  for (let i = 0 ; i < t.length ; i++) {
      if (frequency[t[i]]) {
          frequency[t[i]] -= 1;
          if (frequency[t[i]] < 0) return false;
      } else {
          return false;
      }
  }
  console.log(frequency)
  return Math.max(...Object.values(frequency)) === 0;
};




// Intuition:  Create a frequency map to track how many times characters appear in the first string, and go through the second string and subtract from those values.  If the value goes below 0, or if there are any characters left over, return false.


