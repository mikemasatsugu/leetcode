/*
https://leetcode.com/problems/linked-list-cycle-ii/


Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.


Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
Example 2:


Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
Example 3:


Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.


Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
 

Follow up: Can you solve it using O(1) (i.e. constant) memory?

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  };

  if (!fast || !fast.next) {
    return null; // No cycle in LL
  };

  let curr = head;
  while (curr !== fast) {
    curr = curr.next;
    fast = fast.next;
  }

  return curr;
};



/*
EXPLANATION:

Floyd cycle detection algorithm

If x is the distance from the start of the LL to the beginning of the cycle,
then slow and fast nodes will always intersect inside of the cycle x nodes away from the beginning

So when they intersect, create a new pointer "curr" at the start of the LL and walk it towards
the cycle, and walk fast or slow towards the beginning as well, each moving one node at a time

When they intersect x nodes away, then the node they are on is the beginning of the cycle.

*/



var detectCycleCommented = function (head) {
  // Initialize slow and fast pointers
  let slow = head;
  let fast = head;

  // While fast and fast.next are truthy values
  while (fast && fast.next) {
    // Move slow 1 node, move fast 2 nodes
    slow = slow.next;
    fast = fast.next.next;

    // When slow and fast intersect, break out of while loop
    if (slow === fast) {
      break;
    }
  };

  // If fast or fast.next is a null value, then we are not in a circular LL
  if (!fast || !fast.next) {
    return null; // No cycle in LL
  };

  // Create a pointer "curr" at beginning of LL
  let curr = head;
  // While curr and fast pointers are not intersecting
  while (curr !== fast) {
    // Move curr and fast one node at a time
    // When they intersect, while loop will stop
    curr = curr.next;
    fast = fast.next;
  }

  // Return curr node which should be at start of cycle
  return curr;
};