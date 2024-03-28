/* 
堆排序算法
  (1)用数组创建一个最大堆用做数据源
  (2)最大值会被存储在第一个位置，我们要将它替换为堆的最后一个值，将堆的大小减1
  (3)最后，我们将堆的根节点下移并重复步骤2，直到堆的大小为1
*/
import { Compare, defaultCompare, swap } from '../util.js'
export function heapSort(array, compareFn = defaultCompare ) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn) // (1)
  while(heapSize > 1) {
    swap(array, 0, --heapSize)  // (2)
    siftDown(array, 0, heapSize, compareFn)  // (3)
  }
  return array
}

// 构建最大堆
function buildMaxHeap(array, compareFn) {
  for(let i = Math.floor(array.length / 2); i >= 0; i-= 1 ) {
    siftDown(array, i, array.length, compareFn)
  }
}

// 下移函数
function siftDown(array, index, size, compareFn) {
  let element = index;
  const left = (2 * index) + 1;
  const right = (2 * index) + 2;
  if (
    left < size &&
    compareFn(array[element], array[left]) === Compare.BIGGER_THAN
  ) {
    element = left;
  }
  if (
    right < size &&
    compareFn(array[element],array[right]) === Compare.BIGGER_THAN
  ) {
    element = right;
  }
  if (index !== element) {
    swap(array, index, element);
    siftDown(element);
  }
}

const array = [7, 6, 3, 5, 4, 1, 2]
console.log('Before sort:', array)
console.log('After sort:', heapSort(array)) // After sort: [7, 6, 5, 4,3, 2, 1]
