"use strict";
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
let node1 = new ListNode('node 1 data');
let node2 = new ListNode('node2 data');
node1.next = node2;
console.log(node1);
