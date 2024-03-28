// 基于javascript 对象的stack类
class Stack {
  constructor() {
    this.count = 0;
    this.array = {};
  }
  isEmpty() {
    return this.count === 0;
  }
  // 向栈中插入元素
  push(item) {
    this.array[this.count] = item;
    this.count++;
  }
  // 从栈中弹出元素
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.array[this.count];
    delete this.array[this.count]
    return result
  }
  // 查看栈顶元素
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.array[this.count - 1]
  }
  clear() {
    // this.count = 0
    // this.array = {}
    while(!this.isEmpty()) {
      this.pop()
    }
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = ''
    for(let i = 0; i < this.count; i++) {
      objString += `${this.array[i]}`
    }
    return objString;
  }
}

const stack = new Stack()
stack.push(5)
stack.push(10)
stack.push(20)
console.log(stack)
console.log(stack.peek())
console.log(stack.toString())