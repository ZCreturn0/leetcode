/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var result = new ListNode();
    var current = result;
    var addOne = false;
    while(l1 || l2){
        var v1 = (l1 && l1.val) || 0;
        var v2 = (l2 && l2.val) || 0;
        var added = v1 + v2;
        if (addOne) {
            added++;
        }
        if (added >= 10) {
            addOne = true;
        }
        else{
            addOne = false;
        }
        added = added % 10;
        current.val = added;
        if ((l1 && l1.next) || (l2 && l2.next)) {
            current.next = new ListNode();
            current = current.next;
        }
        else{
            if (addOne) {
                current.next = new ListNode();
                current = current.next;
                current.val = 1;
                current.next = null;
            }
            else{
                current.next = null;
            }
        }
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return result;
};

