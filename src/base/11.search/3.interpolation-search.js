import { Compare,defaultCompare,defaultEquals } from '../util.js';
import { quickSort } from '../10.sort/5.quick-sort.js';

/* 
内插搜索：改良版的二分搜索
  二分搜索总是搜索mid位置上的值，而内插搜索会根据要搜索的值检查数组中的不同地方
*/

function biggerOrEquals(a, b, compareFn) {
  const res = compareFn(a, b)
  return res === Compare.BIGGER_THAN || res === Compare.EQUALS
}

function lesserOrEquals(a, b, compareFn) {
  const res = compareFn(a, b)
  return res === Compare.LESS_THAN || res === Compare.EQUALS
}

function defaultDiff(a, b) {
  return Number(a) - Number(b);
}

export function interpolationSearch(
  array,
  value,
  compareFn = defaultCompare,
  equalsFn = defaultEquals,
  diffFn = defaultDiff
) {
  const sortedArray = quickSort(array)
  const { length } = array;
  let low = 0;
  let high = length - 1;
  let position = -1;
  let delta = -1;
  while (
    low <= high &&
    biggerOrEquals(value, array[low], compareFn) &&
    lesserOrEquals(value, array[high], compareFn)
  ) {
    // console.log(high)
    // 如果查找的值更接近array[high],则查找positon位置更靠近较大的值
    // 如果查找的值更接近array[row],则查找positon位置更靠近较小的值
    delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
    // console.log(delta)
    position = low + Math.floor((high - low) * delta);
    // console.log(position)
    if (equalsFn(array[position], value)) {
      return position;
    }
    if (compareFn(array[position], value) === Compare.LESS_THAN) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }
  return undefined;
}

const array = [4, 39, 54, 9, 23, 45, 32]
// 排序后 【4 9 23 32 39 45 54】

console.log(interpolationSearch(array, 9)) // 1
console.log(interpolationSearch(array, 45)) // 5