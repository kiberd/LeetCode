/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    if (head === null || head.next === null) return false;
    
    const historyNode = [head];
    
    let currentNode = head;
    let nextNode = head.next;
    
    while(true){
        
        if (nextNode === null) return false;
        if (historyNode.includes(nextNode)) return true;
        
        historyNode.push(nextNode);
        
        currentNode = nextNode;
        nextNode = currentNode.next;
        
    }
    
};