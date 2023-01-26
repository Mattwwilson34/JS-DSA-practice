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

	public size(): number {
		let count = 0
		if (this.head) {
			count += 1;
			let currentNode = this.head
			while (currentNode.next !== null) {
				currentNode = currentNode.next
				count += 1;
			}
		}
		return count
	}

	public getHead(): ListNode<Type> | null {
		if (!this.head) return null
		return this.head
	}


	public tail(): ListNode<Type> | null {
		if (!this.head) return null
		if (!this.head.next) return this.head
		let currentNode = this.head
		while (currentNode.next !== null) {
			currentNode = currentNode.next
		}
		return currentNode
	}

	public atIndex(index: number): ListNode<Type> | null {
		if (!this.head) return this.head

		let currentNode: ListNode<Type> | null = this.head

		while (index > 0) {
			if (currentNode) {
				currentNode = currentNode.next
				index -= 1;
			}
		}
		return currentNode
	}

	public pop(): void {
		let size = this.size()
		let secondToLastNode = this.atIndex(size - 2)
		if (secondToLastNode) {
			secondToLastNode.next = null
		}

	}

	public containes(value: number): boolean {
		if (this.head) {
			let currNode = this.head;
			let currVal = currNode.val

			if (currVal === value) {
				return true
			}

			while (currNode.next !== null) {
				if (currVal === value) {
					return true
				}
				currNode = currNode.next
				currVal = currNode.val
			}
		}
		return false
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
const list2 = new LinkedList(new ListNode(100))

list.head = head;
console.log(list.containes(6))
