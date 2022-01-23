/*
https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

 

Example 1:

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
Example 2:

Input: operations = ["++X","++X","X++"]
Output: 3
Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.
Example 3:

Input: operations = ["X++","++X","--X","X--"]
Output: 0
Explanation: The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.
 

Constraints:

1 <= operations.length <= 100
operations[i] will be either "++X", "X++", "--X", or "X--".
*/

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let x = 0;

  for (const operator of operations) {
    operator[1] === '+' ? x += 1 : x -= 1;
  }

  return x;
};


/*
EXPLANATION

The values in the given 'operations' array always have the corresponding operator in the center, "+" or '-'.
Because of this, we can access the value's 1st index and decide whether to increment or decrement x using that.

*/


var finalValueAfterOperationsCommented = function (operations) {
  // Initialize x at 0
  let x = 0;
  // Iterate through operations
  for (const operator of operations) {
    // If character at index 1 is a +, add 1 to x.  Otherwise, subtract 1
    operator[1] === '+' ? x += 1 : x -= 1;
  }
  // Return x
  return x;
};

