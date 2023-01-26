class ListNode<Type> {
	public next: ListNode<Type> | null;
	public val: number | null;

	constructor(val: number | null = null) {
		this.next = null;
		this.val = val;
	}
}

class LinkedList<Type> {
	public head: ListNode<Type> | null;

	constructor(head: ListNode<Type> | null = null) {
		this.head = head;
	}

	public append(value: number = 0): void {
		// handle empty list
		if (!this.head) {
			this.head = new ListNode(value)
		}

		let currentNode = this.head;

		// move to end of linked list
		while (currentNode.next !== null) {
			currentNode = currentNode.next
		}
		// create new node and add to tail of list
		let newNode = new ListNode(value)
		currentNode.next = newNode
	}

	public prepend(value: number = 100): void {
		// handle empyt list
		if (!this.head) this.head = new ListNode(value)

		let newHead = new ListNode(value)
		newHead.next = this.head;
		this.head = newHead;
	}
}


const head = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)
const node6 = new ListNode(6)
const node7 = new ListNode(7)

head.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7

const list = new LinkedList(head)

list.head = head;

const list2 = new LinkedList()

list.prepend()
console.log(list)
