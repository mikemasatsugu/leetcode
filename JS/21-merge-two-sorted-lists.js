/*
https://leetcode.com/problems/merge-two-sorted-lists/

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/


const mergeTwoLists = (list1, list2) => {
  const dummyHead = new ListNode();
  let curr = dummyHead;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (list1 !== null) {
    curr.next = list1;
  } else if (list2 !== null) {
    curr.next = list2;
  }

  return dummyHead.next;
};



/*
EXPLANATION

We create a dummy list to create our new list from = we need this as sort of a launching point for our curr pointer.

We iterate through while list1 and list2 are not pointing at null, and compare the values at each pointer.
If pointer at list1 is less than pointer at list2, curr's next goes to list1, and list1 pointer moves forward.
If pointer at list2 is less than pointer at list1, curr's next goes to list2, and list2 pointer moves forward.
After this, we advance current to what we just assigned it's next to.

Once list1 or list2 is null, we can jump out of our while loop and append whatever is left of the remaining list to the end of our new list.

We return the dummyHead.next, since the dummy head is not needed any more - the real list starts after the first node in the list since it was just a launch point for our curr pointer.
*/