
/**
* 根据数组创建单向链表
* @param arr number arr
*/
export function createLinkList(arr) {
  const length = arr.length
  if (length === 0) throw new Error('arr is empty')

  let curNode = {
      value: arr[length - 1]
  }
  if (length === 1) return curNode

  for (let i = length - 2; i >= 0; i--) {
      curNode = {
          value: arr[i],
          next: curNode
      }
  }

  return curNode
}

/**
* 反转单向链表，并返回反转之后的 head node
* @param listNode list head node
*/
export function reverseLinkList(listNode) {
  // 定义三个指针
  let prevNode = undefined
  let curNode = undefined
  let nextNode = listNode

  // 以 nextNode 为主，遍历链表
  while(nextNode) {
      // 第一个元素，删掉 next ，防止循环引用
      if (curNode && !prevNode) {
          delete curNode.next
      }

      // 反转指针
      if (curNode && prevNode) {
          curNode.next = prevNode
      }

      // 整体向后移动指针
      prevNode = curNode
      curNode = nextNode
      nextNode = nextNode?.next
  }

  // 最后一个的补充：当 nextNode 空时，此时 curNode 尚未设置 next
  curNode.next = prevNode

  return curNode
}


const arr = [100, 200, 300, 400, 500]
const list = createLinkList(arr)
console.info('list:', list)

const list1 = reverseLinkList(list)
console.info('list1:', list1)
