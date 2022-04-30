/*
https://leetcode.com/problems/fizz-buzz/

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

Constraints:

1 <= n <= 10^4
*/

/**
 * @param {number} n
 * @return {string[]}
 */
 const fizzBuzz = (n) => {
  const cache = [];
  
  for (let i = 1 ; i < n + 1 ; i++) {
      let temp = '';
      
      if (i % 3 === 0) temp += 'Fizz';
      if (i % 5 === 0) temp += 'Buzz';
      if (temp.length === 0) temp = i.toString();
      
      cache.push(temp);
  }
  
  return cache;
};


//  Intuition: String concatenation: iterate through range 1,n + 1 and build a temp string.  Concat given strings based on divisor, and if nothing is appended, temp is stringified number.  Append temp string to cache array and return cache when finished iterating.
