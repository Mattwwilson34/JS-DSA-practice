class ListNode<T> {
	public next: ListNode<T> | null;

	constructor(val?: T) {
		this.next = null;
		this.? val = val;
	}
}

let node1 = new ListNode(12)
let node2 = new ListNode('node2 data')


// Review generic types and see if you can create a linked list that
// can accept any tupe as the data value.
