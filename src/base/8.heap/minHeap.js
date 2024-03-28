/* 
  二叉堆
  *它是一棵完全二叉树，树的每一层都有左侧或右侧子节点(除了最后一层叶节点)，
  并且最后一层的叶节点尽可能都是左侧子节点 这叫做 *结构特性*
  *不是最大堆就是最小堆：所有的节点都大于等于或小于等于每个它的子节点 这叫做*堆特性*
 */
// 最小堆类
/* 
指针节点表示        1
                /    \
               2      3
              /\      /\
             4 5     6 7
使用数组表示 [1, 2, 3, 4, 5, 6, 7]: 对于给定index的节点 左侧子节点的位置 (2 * index + 1)
  右侧子节点位置( 2*index + 2)  父节点的位置(index / 2)


*/
import { Compare, defaultCompare, swap } from '../util.js';

export default class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.heap = []
  }
  getLeftIndex(index) {
    return (2 * index) + 1;
  }
  getRightIndex(index) {
    return (2 * index) + 2;
  }
  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() <= 0;
  }
  clear() {
    this.heap = [];
  }
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }
  // 向堆中插入新值
  insert(value) {
    if (value != null) {
      const index = this.heap.length; 
      this.heap.push(value); // 将值插入底部的叶节点
      this.siftUp(index); // 将这个值和它的父节点进行交换，直到父节点小于这个插入的值
      return true;
    }
    return false;
  }
  siftUp(index) {
    let parent = this.getParentIndex(index); // 获取其父节点位置
    // 循环 如果父节点 < 要插入的节点 则跳出循环
    while (
      index > 0 &&
      this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN
    ) {
      // 交换父节点 和 要插入节点的位置
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }
  // 导出堆中的第一个第一个元素
  extract() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }
    const removedValue = this.heap.shift();
    this.heap[0] = this.heap.pop(); // 将最后一个元素移到根部第一个元素
    this.siftDown(0);// 递归交换元素位置，直到堆的结构正常
    return removedValue;
  }
  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    if (
      left < size &&
      this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN
    ) {
      element = left;
    }
    if (
      right < size &&
      this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN
    ) {
      element = right;
    }
    if (index !== element) {
      swap(this.heap, index, element);
      this.siftDown(element);
    }
  }
}

const minHeap = new MinHeap()

minHeap.insert(2)
minHeap.insert(3)
minHeap.insert(4)
minHeap.insert(5)
minHeap.insert(1)

console.log(minHeap)