const tree = {
  value: 5,
  left: {
    value: 4,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null },
  },
  right: {
    value: 7,
    left: { value: 6, left: null, right: null },
    right: { value: 8, left: null, right: null },
  },
};

// 前序遍历 (root => left => right)
const preArr = [];
function preOrderSearchTree(node) {
  if (node == undefined) return;
  preArr.push(node.value);
  preOrderSearchTree(node.left);
  preOrderSearchTree(node.right);
}
preOrderSearchTree(tree);
// console.log("前序遍历", preArr); // [5, 4, 2, 3,7, 6, 8]

// 中序遍历 (left => root => right)
const inArr = [];
function inOrderSearchTree(node) {
  if (node == undefined) return;
  inOrderSearchTree(node.left);
  inArr.push(node.value);
  inOrderSearchTree(node.right);
}
inOrderSearchTree(tree);
// console.log("中序遍历", inArr); // [2, 3, 4, 5, 6, 7, 8]

// 后序遍历 (left => right => root)
const postArr = [];
function postOrderSearchTree(node) {
  if (node == undefined) return;
  postOrderSearchTree(node.left);
  postOrderSearchTree(node.right);
  postArr.push(node.value);
}
postOrderSearchTree(tree);
console.log("后序遍历", postArr); // [ 2, 3, 4, 6, 8, 7, 5]

// 搜索二叉树第 K 小 值
function searchKthTree(tree, k) {
  inOrderSearchTree(tree);
  return inArr[k - 1] || null;
}

console.log(searchKthTree(tree, 5)); // 6
