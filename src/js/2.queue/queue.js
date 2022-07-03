/* 
队列是遵循先进先出(FIFO)原则的一组有序集合的项。队列在尾部添加元素，并在顶部移除元素
例子：排队买票， 文档打印队列
*/
// 队列(先进先出 FIFO)
export default class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // 新元素只能添加到末尾
  enqueue(item) {
    this.items[this.count] = item;
    this.count++;
  }
  // 从队列移除元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  //查看队列头元素
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  //计算队列中有多少个元素
  size() {
    return this.count - this.lowestCount;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

// 使用Queue类
// const queue = new Queue()
// console.log(queue.isEmpty()) // => true

// queue.enqueue('Jack')
// queue.enqueue('kite')
// queue.enqueue('Long')

// console.log(queue.toString()) // Jack,kite,Long

// queue.dequeue()

// console.log(queue.toString()) // kite,Long


