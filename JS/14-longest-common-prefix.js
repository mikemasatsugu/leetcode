/*
https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/


const longestCommonPrefix = (strs) => {

  let minString = '';
  let max = Infinity;

  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < max) {
      minString = strs[i];
      max = strs[i].length;
    }
  }

  while (minString.length > 0) {
    let count = 0;

    for (let i = 0; i < strs.length; i++) {
      const sliced = strs[i].slice(0, minString.length);
      if (sliced !== minString) break;
      count++;
    }

    if (count === strs.length) {
      return minString;
    }

    minString = minString.slice(0, -1);
  }

  return '';
};



/*
EXPLANATION

We first start by finding the shortest string (minString) - the longest common prefix cannot be longer than the shortest string.

We reduce minString from the right and compare with the other strings in strs

If the count reaches strs.length, then we know minString was reduces as far as it can go and can be returned.

If we leave without returning, no common prefix was found and we can return an empty string.
*/