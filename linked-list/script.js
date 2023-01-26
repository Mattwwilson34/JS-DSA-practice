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
        // move to end of linked list
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        // create new node and add to tail of list
        let newNode = new ListNode(value);
        currentNode.next = newNode;
    }
    prepend(value = 100) {
        // handle empyt list
        if (!this.head)
            this.head = new ListNode(value);
        let newHead = new ListNode(value);
        newHead.next = this.head;
        this.head = newHead;
    }
    size() {
        let count = 0;
        if (this.head) {
            count += 1;
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
                count += 1;
            }
        }
        return count;
    }
    getHead() {
        if (!this.head)
            return null;
        return this.head;
    }
    tail() {
        if (!this.head)
            return null;
        if (!this.head.next)
            return this.head;
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    atIndex(index) {
        if (!this.head)
            return this.head;
        let currentNode = this.head;
        while (index > 0) {
            if (currentNode) {
                currentNode = currentNode.next;
                index -= 1;
            }
        }
        return currentNode;
    }
    pop() {
        let size = this.size();
        let secondToLastNode = this.atIndex(size - 2);
        if (secondToLastNode) {
            secondToLastNode.next = null;
        }
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
const list2 = new LinkedList(new ListNode(100));
list.head = head;
list.pop();
console.log(list);
