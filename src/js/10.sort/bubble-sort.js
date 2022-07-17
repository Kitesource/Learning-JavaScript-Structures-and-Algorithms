import { Compare, defaultCompare, swap } from '../util.js'

/* 
冒泡排序： 比较所有相邻两项，第一项比第二项大，则交换它们
算法复杂度：O(n^2)
*/
function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array
  for (let i = 0; i < length; i++) { // 外层循环控制数组中经过多少轮排序
    for(let j = 0; j < length - 1 - i; j++) { // 内存循环控制从第一位迭代至倒数第二位，并减去外循环中已跑过的轮数
      if (compareFn(array[j], array[j+1]) === Compare.BIGGER_THAN) {
        // 前面一项 大于 后一项
        swap(array, j+1, j)
      }
    }
  }
  return array;
}

console.log(bubbleSort([3, 2, 6, 4, 1]))