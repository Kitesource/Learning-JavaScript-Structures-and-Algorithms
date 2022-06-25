/* 
链表存储有序的元素集合，不同于数组，链表中的元素在内存中并不是连续放置的。
每个元素由一个存储元素本身的节点和一个指向下一个元素的引用(也称指针或链接)组成。
链表添加或移除元素不需要移动其他元素，访问链表中间的元素，必须从表头开始迭代链表直到所需元素。
*/

import { defaultEquals } from '../util.js';
// Node 类表示要添加到链表中的项，它包含一个element属性，表示要加入链表元素的值；以及一个next属性，代表指向下一个元素的指针
import { Node } from '../models/linked-list-models.js';

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.equalsFn = equalsFn;
    this.count = 0;
    this.head = undefined;
  }
  // 向链表尾部添加一个元素
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      //链表为空，添加的是第一个元素
      // catches null && undefined
      this.head = node;
    } else {
      // 链表不为空，向其追加元素
      current = this.head;
      while (current.next != null) { // 循环链表，到达链表尾部
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  // 从特定位置获取一个元素
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
  // 在指定位置插入元素
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        // 在第一个位置插入元素
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        // 中间或尾部插入一个元素
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  // 从特定位置移除一个元素
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        // 移除第一个元素
        this.head = current.next;
      } else {
        // 移除最后一个或中间某个元素
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  // 根据元素的值移除元素
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.size() && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.count;
  }
  getHead() {
    return this.head;
  }
  clear() {
    this.head = undefined;
    this.count = 0;
  }
  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

const list = new LinkedList()
list.push(522)
list.insert(521, 0)
list.push(523)
console.log(list)
console.log(list.toString())
