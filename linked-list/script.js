"use strict";
class ListNode {
    constructor(val = null) {
        this.next = null;
        this.val = val;
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    append(value = 0) {
        // handle empty list
        if (!this.head) {
            this.head = new ListNode(value);
        }
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        let newNode = new ListNode(value);
        currentNode.next = newNode;
    }
}
const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
const node6 = new ListNode(6);
const node7 = new ListNode(7);
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
const list = new LinkedList(head);
list.head = head;
const list2 = new LinkedList();
list.append(100);
console.log(list);
