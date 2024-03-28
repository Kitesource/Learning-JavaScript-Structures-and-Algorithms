/* 
栈是一种遵循后进先出(LIFO)原则的有序集合，新添加或待删除的元素都保存在栈的同一端，称作栈顶
另一端为栈底。栈被用于编程语言的编译器和内存中保存变量、方法调用等，也被用于浏览器历史记录(浏览器的前进后退按钮)
*/
// 创建一个基于数组的栈
export default class Stack {
  constructor() {
    this.array = []
  }
  push(items) {
    this.array.push(items)
  }
  pop() {
    return this.array.pop()
  }
  // 查看栈顶元素
  peek() {
    return this.array[this.array.length - 1]
  }
  // 检查栈是否为空
  isEmpty() {
    return this.array.length === 0
  }
  size() {
    return this.array.length
  }
  clear() {
    this.array = []
  }
}

const stack = new Stack()
stack.push(5)
stack.push(10)
stack.push(20)
console.log(stack) // [5, 10, 20]
console.log(stack.pop()) // 20
console.log(stack.peek()) // 10


