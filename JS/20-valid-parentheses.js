/*
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.
*/


const isValid = function (s) {
  if (s.length <= 1 || s.length % 2 === 1) return false;
  const legend = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(legend[s[i]]);
    } else {
      const popped = stack.pop();
      if (popped !== s[i]) return false;
    }

  }

  return stack.length === 0;
};


var isValid = function (s) {

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if ((s[i] === "]" && stack[stack.length - 1] === "[") || (s[i] === "}" && stack[stack.length - 1] === "{") || (s[i] === ")" && stack[stack.length - 1] === "(")) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};


/*
EXPLANATION

Using a stack, we push the matching closing parentheses whenever we encounter an open parentheses.
If it's not an opening parentheses, we pop the top value off of our stack and make sure it matches our last open.  If not, we know this is not a valid set.

We want to return stack.length === 0 to create a comparison that returns a boolean - if the string was only opening parentheses, we would still pass through our iteration with no problem.
We have to make sure we close all opening parentheses, which we do after our iteration is complete.
*/
