'''
https://leetcode.com/problems/reverse-linked-list/

Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
'''



# Iterative:
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prevNode = None
        currNode = head
        while currNode:
            nextNode = currNode.next
            
            currNode.next = prevNode
            prevNode = currNode
            currNode = nextNode
            
        return prevNode



# Recursive:
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode], prevNode = None) -> Optional[ListNode]:
        if head is None:
            return prevNode
        
        nextNode = head.next
        head.next = prevNode
        prevNode = head
    
        return self.reverseList(nextNode, prevNode)


# Intuition: Use two nodes (prev and current) to iterate through the LL.  Use a temporary nextNode to store current's next, set current's next to point to the previous node, and then move previous to current, and current to nextNode.  Repeat until current is null