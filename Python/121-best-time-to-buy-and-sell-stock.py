'''
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

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
'''



class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxP = 0
        left, right = 0, 1 # left=buy, right=sell
        
        while right < len(prices):
            #profitable?
            if prices[left] < prices[right]:
                profit = prices[right] - prices[left]
                maxP = max(maxP, profit)
            else:
                left = right
            right += 1
            
        return maxP


# Pattern: Two Pointer
# Intuition: use left pointer as buy day, and right as sell.  Iterate while right is within prices array, and if price @ left is greater than price @ right, see if the profit is greater.  If not, move left to where right is and continue.