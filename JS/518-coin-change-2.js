/*
https://leetcode.com/problems/coin-change-2/

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.

 

Example 1:

Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
Example 3:

Input: amount = 10, coins = [10]
Output: 1
 

Constraints:

1 <= coins.length <= 300
1 <= coins[i] <= 5000
All the values of coins are unique.
0 <= amount <= 5000
*/


const change = (amount, coins) => {
  const dpTable = Array.from({ length: amount + 1 }, (e, i) => i === 0 ? 1 : 0);

  for (let coin of coins) {
    if (coin <= amount) {
      for (let i = coin; i <= amount; i++) {
        let difference = i - coin;
        dpTable[i] += dpTable[difference];
      }
    }
  }

  return dpTable[amount]
};



/*
EXPLANATION

// build dp table using values less than amount
// initialize all to 0 and 0 position to 1
// 0 position is one since we have a way of generating
// change for 0 from any array
// go through coins less than amount
//for any coin go through values equal to or greater than coin
// but less than amount
// if value is greater than or equal to coin
// subtract value from value from coin to get diff
// if value equal to coin, then you have found change
// so you've found one way to find change, remember 0 is initialized to 1
// since 0 is the only number with a value of 1
// you add the change at table[diff] to current position in table
//so when you get to a number that's a coin
//the first diff will be 0 so the number of ways to get change for
//that particular coin is increased by 1
//for example, with an array of [1,2]
//you can find at least one change for 1 and 2 already from the coins
// if the diff itself has no change
// then 0 will be added
*/