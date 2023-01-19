// Binary search tree
// Nodes in BST's can have left and right values
// Left values are smaller than Right values
// This makes inserting and searching fast when compared to linked lists
// Root is the first node of the binary search tree
// Leaves are the lowerst most nodes in the tree
// If a binary tree is unabalanced then it hold little value over a linked list
// Binary search trees are still slower than array for reading

class TreeNode {
	public data: number;
	public left: TreeNode | null;
	public right: TreeNode | null;

	constructor(data: number) {
		this.data = data;
		this.left = null;
		this.right = null;

	}
}

class BinarySearchTree {
	public head: TreeNode | null;
	constructor(head?: TreeNode) {
		this.head = head || null
	}

	// recursive function to add new nodes to tree
	public insert(node: TreeNode | null = this.head, value: number): TreeNode {
		if (node === null) {
			const root = new TreeNode(value)
			return root;
		}
		else {
			if (value < node.data) {
				node.left = this.insert(node.left, value)
			}
			else {
				node.right = this.insert(node.right, value);
			}
			return node;
		}
	}
}

const rootNode = new TreeNode(50);

rootNode.left = new TreeNode(35);
rootNode.right = new TreeNode(60);

const BSTree = new BinarySearchTree(rootNode);

BSTree.insert(BSTree.head, 30)
BSTree.insert(BSTree.head, 20)
BSTree.insert(BSTree.head, 70)
BSTree.insert(BSTree.head, 90)
BSTree.insert(BSTree.head, 40)
BSTree.insert(BSTree.head, 25)
BSTree.insert(BSTree.head, 32)
BSTree.insert(BSTree.head, 39)
BSTree.insert(BSTree.head, 18)


console.log(BSTree)

let counter: number = 0;

function recursion(node: TreeNode | null): TreeNode | null {

	console.log('iteration', counter, 'node: ', node?.data);

	if (node === null) {
		return node
	}
	else if (node.left === null) {
		return node
	}
	else {
		counter += 1;
		recursion(node.left)
	}
	return null
}



recursion(BSTree.head);

function inOrderTraversal(rootNode: TreeNode | null): number[] {
	let res: number[] = [];

	function inorder(root: TreeNode | null) {
		if (root) {
			inorder(root.left)
			res.push(root.data)
			inorder(root.right)
		}
	}

	if (rootNode) {
		inorder(rootNode)
	}
	return res
}
function preOrderTraversal(rootNode: TreeNode | null): number[] {
	let res: number[] = [];

	function inorder(root: TreeNode | null) {
		if (root) {
			res.push(root.data)
			inorder(root.left)
			inorder(root.right)
		}
	}

	if (rootNode) {
		inorder(rootNode)
	}
	return res
}
function postOrderTraversal(rootNode: TreeNode | null): number[] {
	let res: number[] = [];

	function inorder(root: TreeNode | null) {
		if (root) {
			inorder(root.left)
			inorder(root.right)
			res.push(root.data)
		}
	}

	if (rootNode) {
		inorder(rootNode)
	}
	return res
}

console.log(inOrderTraversal(BSTree.head))
console.log(preOrderTraversal(BSTree.head))
console.log(postOrderTraversal(BSTree.head))

