/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 * data part of the node        
 *  this.val = val;
 * pointer to the next node
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
      let current = head;
      let previous = null;

      while (current) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;

      }
      return previous;
    }
}
