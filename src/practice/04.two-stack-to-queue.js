export class MyQueue {
  
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  /**
   * 入队
   * @param n n
   */
  add(n) {
      this.stack1.push(n)
  }

  /**
   * 出队
   */
  delete() {
      let res

      const stack1 = this.stack1
      const stack2 = this.stack2

      // 将 stack1 所有元素移动到 stack2 中
      while(stack1.length) {
          const n = stack1.pop()
          if (n != null) {
              stack2.push(n)
          }
      }

      // stack2 pop
      res = stack2.pop()

      // 将 stack2 所有元素“还给”stack1
      while(stack2.length) {
          const n = stack2.pop()
          if (n != null) {
              stack1.push(n)
          }
      }

      return res || null
  }

  get length() {
      return this.stack1.length
  }
}

// 功能测试
const q = new MyQueue()
q.add(100)
q.add(200)
q.add(300)
console.info(q.length) //3
console.info(q.delete()) // 100
console.info(q.length) // 2

console.info(q.delete()) // 200
console.info(q.length) // 1

