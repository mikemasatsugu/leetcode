'''
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
'''


class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        closeToOpenHash = { ')': '(', ']': '[', '}': '{' }
        
        for char in s:
            if char in closeToOpenHash:
                if stack and stack[-1] == closeToOpenHash[char]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(char)
        
        return len(stack) == 0
        


# Intuition: Use a stack and a hashmap.  Hashmap has closing bracket keys and open bracket values.  We iterate through the string, and if closing bracket, make sure top of stack is matching opening.  If it is, we can pop it.  If not, return false.  If current char is not closing bracket, then push current char to stash.