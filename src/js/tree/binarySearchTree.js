/* 
二叉树：最多只能又两个子节点
二叉搜索树：是二叉树的一种，但只允许你在左侧节点储存比父节点小的值，在右侧节点存比父节点大的值
  键： 是对树相关术语中对节点的称呼
  树的遍历： 中序遍历、先序遍历、后序遍历
*/
import { Compare, defaultCompare } from '../util.js'
import { Node } from '../models/node.js'

export default class BinarySearchTree {
  constructor(compareFn =defaultCompare ) {
    this.compareFn = compareFn // 用来比较节点值
    this.root = null // Node类型根节点
  }
  // 向二叉搜索树中插入一个键
  insert(key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode(node, key) {
    if(this.compareFn(key, node.key) == Compare.LESS_THAN) {
      // 新节点的键小于当前节点的键
      if(node.left == null) {
        // 当前节点左侧没有子节点
        node.left = new Node(key)
      } else {
        // 当前节点左侧有子节点，递归继续找到树的下一层
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  // 中序遍历: 从小到大访问所有节点
  inOrderTraverse(cb) {
    // 回调函数用来定义我们对遍历的每个节点进行的操作
    this.inOrderTraverseNode(this.root, cb)
  }
  inOrderTraverseNode(node, cb) {
    if(node != null) {
      this.inOrderTraverseNode(node.left, cb)
      cb(node.key)
      this.inOrderTraverseNode(node.right, cb)
    }
  }
  // 先序遍历：先访问节点本身、然后再访问它的左侧子节点，最后是右侧子节点
  preOrderTraverse(cb) {
    this.inOrderTraverseNode(this.root, cb)
  }
  preOrderTraverseNode(node, cb) {
    if(node != null) {
      cb(node.key)
      this.inOrderTraverseNode(node.left, cb)
      this.inOrderTraverseNode(node.right, cb)
    }
  }
  // 后序遍历：先访问节点后代节点 然后再节点本身
  postOrderTraverse(cb) {
    this.inOrderTraverseNode(this.root, cb)
  }
  postOrderTraverseNode(node, cb) {
    if(node != null) {
      this.inOrderTraverseNode(node.left, cb)
      this.inOrderTraverseNode(node.right, cb)
      cb(node.key)
    }
  }
  // 搜索树 最大值、最小值、特定值
  min() {
    return this.minNode(this.root)
  }
  minNode(node) {
    let current = node
    while(!!current && !!current.left) {
      current = current.left
    }
    return current
  }
  max() {
    return this.maxNode(this.root)
  }
  maxNode(node) {
    let current = node
    while(!!current && !!current.right) {
      current = current.right
    }
    return current
  }
  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    !!node && false
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    } else {
      // 返回true 表示该键存在树中
      return true
    }
  }
  // 移除一个节点
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
  removeNode(node, key) {
    if (node == null) {
      return undefined;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 要移除的键比当前节点的值小，沿着树左边找到下一个节点
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    // 要移除的键和当前节点相等
    // case 1 当前节点没有子节点
    if (node.left == null && node.right == null) {
      // 将这个节点赋值undefined 来移除他
      node = undefined;
      // 返回 undefined 来将对应的父节点指针赋予undefined
      return node;
    }
    // case 2 当前节点没有左侧或右侧子节点
    if (node.left == null) {
      node = node.right;
      return node;
    } else if (node.right == null) {
      node = node.left;
      return node;
    }
    // case 3 当前节点有两个子节点
    const aux = this.minNode(node.right); // 找到右边子树中最小的节点
    node.key = aux.key; // 用右边子树中最小的节点 去更新这个要移除的键
    node.right = this.removeNode(node.right, aux.key);// 移除右边子树中最小的节点
    return node;
  }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(14)
tree.insert(12)
tree.insert(13)
tree.insert(10)
tree.insert(20)
tree.insert(25)
tree.insert(18)
/**
 *         11       
 *       /    \
 *     7        15 
 *    /  \     /  \    
 *   5    9   13    20       
 *  / \  / \  / \   / \
 * 3  6  8 10 12 14 18 25
 */
console.log(tree)
const pointNode = (v) => { console.log(v) }
tree.inOrderTraverse(pointNode) // 3 5 7 8 9 10 11 12 13 14 15 18 20 25
console.log(tree.min()) // Node { key: 3, left: undefined, right: undefined }
console.log(tree.max())
console.log(tree.search(20)) // true

tree.remove(15)
tree.inOrderTraverse(pointNode) // 3 5 7 8 9 10 11 12 13 14 18 20 25