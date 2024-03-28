import { Compare, defaultCompare, swap } from '../util.js'

/* 
选择排序： 找到数据中最小值并将其放在第一位，接着找到第二小的值放在第二位，以此类推
算法复杂度：O(n^2)
*/

function selectionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let indexMin;
  for(let i = 0; i < length; i++) {
    indexMin = i; // 假设本迭代轮次的第一个为最小值
    for (let j = i; j < length; j++) {
      if(defaultCompare(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j
      }
      if (i !== indexMin) {
        swap(array, i, indexMin)
      }
    }
  }
  return array
}

console.log(selectionSort([3, 2, 5, 4, 1]))