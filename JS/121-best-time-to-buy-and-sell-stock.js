/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4
*/



/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i]
    } else {
      profit = Math.max(prices[i] - buy, profit);
    }
  }

  return profit;
};



/*
EXPLANATION:

Set a variable to the first possible buy - first index of prices
Set a value 'profit' at 0 (the day we purchase, profit will be 0);
iterate through input array
If the current value is less than the last value we "bought" at, we should make the current value our new buy since profit margin is higher
If we do this, we need to reset our newest "buy" to the current value
If the current value is NOT less than the last buy value, we recalculate our highest profit by taking the max between current price - buy price, and our profit at each step
After the iteration is finished, return the max profit found
*/

var maxProfitCommented = function (prices) {
  // Set initial buy to first 'day'
  let buy = prices[0];
  // Profit will be 0 on initial buy
  let profit = 0;

  //Iterate through input array
  for (let i = 1; i < prices.length; i++) {
    // If buy is greater than the current value, we should buy this one instead because we stand to make more if we sell from a lower price
    if (buy > prices[i]) {
      // reassign buy to current value
      buy = prices[i]
    } else {
      // If buy is NOT greater, then we calculate our new maximum profit by comparing the profit of selling on the current day VS our previous profit
      profit = Math.max(prices[i] - buy, profit);
    }
  }
  // Return our maximum profit found
  return profit;
};

// console.log(maxProfitCommented([100, 1, 123, 120]))
console.log(maxProfitCommented([100, 1, 123, 120])); // 122
console.log(maxProfitCommented([100, 100, 100, 100])); // 0
console.log(maxProfitCommented([100, 88, 44, 2])); // 0
console.log(maxProfitCommented([100, 88, 99, 300])); // 212