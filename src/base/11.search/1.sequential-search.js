import { defaultEquals } from '../util.js';

/* 
顺序(线性)搜索 
  将每一个数据结构中的元素和我们要找的元素作比较
  是最低效的一种搜索算法
*/

export function sequentialSearch(array, value, equalsFn = defaultEquals) {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i;
    }
  }
  return undefined;
}