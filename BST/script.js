"use strict";
// Binary search tree
// Nodes in BST's can have left and right values
// Left values are smaller than Right values
// This makes inserting and searching fast when compared to linked lists
// Root is the first node of the binary search tree
// Leaves are the lowerst most nodes in the tree
// If a binary tree is unabalanced then it hold little value over a linked list
// Binary search trees are still slower than array for reading
var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(head) {
        this.head = head || null;
    }
    BinarySearchTree.prototype.insert = function (node, value) {
        if (node === void 0) { node = this.head; }
        if (node === null) {
            var root = new TreeNode(value);
            return root;
        }
        else {
            if (value < node.data) {
                node.left = this.insert(node.left, value);
            }
            else {
                node.right = this.insert(node.right, value);
            }
            return node;
        }
    };
    return BinarySearchTree;
}());
var rootNode = new TreeNode(50);
rootNode.left = new TreeNode(35);
rootNode.right = new TreeNode(60);
var BSTree = new BinarySearchTree(rootNode);
BSTree.insert(BSTree.head, 30);
BSTree.insert(BSTree.head, 20);
console.log(BSTree);
