'''
https://leetcode.com/problems/valid-anagram/submissions/


Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
'''

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        freq = {}
        
        for char in s:
            freq[char] = freq.get(char, 0) + 1
            
        for char in t:
            if char in freq:
                freq[char] -= 1
            else:
                return False
            if freq[char] < 0:
                return False
        
        return max(freq.values()) == 0


# Refactor:

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        s_freq = {}
        t_freq = {}
        
        for i in range(len(s)):
            s_freq[s[i]] = 1 + s_freq.get(s[i], 0)
            t_freq[t[i]] = 1 + t_freq.get(t[i], 0)
        for char in s_freq:
            if s_freq[char] != t_freq.get(char, 0):
                return False
        
        return True