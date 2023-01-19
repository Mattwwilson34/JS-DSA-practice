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


console.log(BSTree) 
