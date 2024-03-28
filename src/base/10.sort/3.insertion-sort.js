import { Compare, defaultCompare, swap } from '../util.js'
/* 
插入排序： 将数组分为已排序区间和未排序区间两部分，从未排序区间中依次取元素跟已排序区间的元素一一对比，找到适合插入的位置。
          假定第一项已经排好了，它和第二项比较，第二项插入第一项前面或待在原位，前两项已排好
          第三项和前两项比较，判断应插入的位置或待在原位
          以此类推...
算法复杂度：O(n^2)
*/

export function insertionSort(array, compareFn = defaultCompare) {
  const { length } = array

  for( let i = 1; i < length; i++) {
    let j = i;
    let temp = array[i] // 将第 i 项存在临时变量中
    while(j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) { // 迭代已排序区间, 给第i项找到正确位置
      // 如果已排序区间内 某项 大于 第 i项，则需交换位置
      array[j] = array[j - 1]
      j--;
    }
    array[j] = temp
  }
  return array
}

console.log(insertionSort([3, 2, 7, 4, 1]))