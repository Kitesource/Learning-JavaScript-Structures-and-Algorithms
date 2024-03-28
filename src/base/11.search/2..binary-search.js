import { Compare, defaultCompare } from '../util.js';
import { quickSort } from '../10.sort/5.quick-sort.js';

/* 
 二分搜索 要求被搜索的数据结构已被排好序
 1.选择数组中间值
 2.如果中间值是待搜索值，那么算法执行完毕
 3.如果待搜索的值比选中值要小，则返回步骤1并在选中值左边的子数组中寻找
 4.如果待搜索的值比选中值要大，则返回步骤1并在选中值右边的子数组中寻找

*/
export function binarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(array)
  let low = 0
  let high = sortedArray.length - 1
  while (low <= high) { // 边界，low必须比high小 否则退出循环
    const mid = Math.floor((low + high) / 2)
    const element = sortedArray[mid] // 选择数组中间值

    if (compareFn(element, value) === Compare.LESS_THAN) {
      low = mid + 1
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return undefined
}
