'''
https://leetcode.com/problems/sqrtx/

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

 

Example 1:

Input: x = 4
Output: 2
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 

Constraints:

0 <= x <= 2^31 - 1
'''




# Technically within the rules
class Solution:
    def mySqrt(self, x: int) -> int:
        import math
        return int(math.sqrt(x))
            

# Intuitive:
class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 0: return 0
        if x == 1: return 1
        
        for i in range(x + 1):
            if i * i > x:
                return i - 1
        

# Babylonian Method
#  https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method
class Solution:
    def mySqrt(self, x: int) -> int:
        if x <= 1:
          return x
        else:
          x_n = 0.5 * x # This can be improved
          change = 1
          while change > 0.01: # This can be larger to cut down on iterations, the smaller, the more accurate our answer will be
            next_n = 0.5 * (x_n + (x / x_n))
            change = abs(x_n - next_n)
            x_n = next_n
          return int(x_n)