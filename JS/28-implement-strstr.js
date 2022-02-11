/*
https://leetcode.com/problems/implement-strstr/

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Example 3:

Input: haystack = "", needle = ""
Output: 0
 

Constraints:

0 <= haystack.length, needle.length <= 5 * 104
haystack and needle consist of only lower-case English characters.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (needle.length <= 0 || needle === haystack) return 0
  if (needle.length > haystack.length) return -1

  let left = 0;
  for (let right = needle.length; right <= haystack.length; right++) {
    let temp = haystack.slice(left, right)
    if (temp === needle) return left
    left++
  }
  return -1
};


/*
EXPLANATION

We'll use a sliding window here
First handle edge cases, where the needle is empty, or they already are the same, or if the needle is longer than the haystack.

Initialize the left side of the window, and iterate from the length of the needle.
We temporarily initialize a variable to hold the sliced string from left to right - our 'window'
If the sliced string is equal to the needle, we've found a match and can return our left - the starting index

If we don't find it, we'll fall out of our for loop and return -1.
*/