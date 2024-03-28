/* 
归并排序： 分而治之，将原始数组切分成较小的数组，直到每个小数组只有一个位置，接着将小数组归并成大数组。
  Javasript Array类定义的sort函数
    Firfox使用 归并排序作为其实现
    Chorme使用 快速排序
算法复杂度：O(nlog(n))
*/

export function mergeSort(array) {
  // 结束递归 （当array中小于等于一项，则不用处理）
  if(array.length <= 1) {
    return array;
  }
  // ceil向上取整
  let middleIndex = Math.ceil(array.length / 2);
  let middleValue = array.splice(middleIndex, 1)[0];

  let leftArray = [], rightArray = [];
  for(let i = 0; i < array.length; i++){
    array[i] < middleValue ? leftArray.push(array[i]) : rightArray.push(array[i]);
  }
  return mergeSort(leftArray).concat(middleValue, mergeSort(rightArray))
}

console.log(mergeSort([3, 2, 9, 4, 1]))
