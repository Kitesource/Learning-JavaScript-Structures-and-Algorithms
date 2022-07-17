/* 
快速排序： 和归并排序一样分而治之，将原始数组切分成较小的数组（但它没有项归并排序那样将它们分割开）
  （1）首先从数组中选取一个值作为 主元(pivot)
   (2) 创建两个指针引用，左边指向第一个值，右边指向最后一个，移动左指针直到找到一个比主元大的值，移动右指针直到找到一个比主元小的值
        然后交换它们，重复这个过程，直到左指针超过了右指针，这个过程将使比主元小的值都排在主元之前，比主元大的值都排在之后，这一步交 *划分操作*
  (3) 接着，对划分后的小组（较主元小的值组成的子数组，较主元大的值组成的子数组），重复之前两个步骤，直至数组已完全排序
算法复杂度：O(nlog(n))
*/

function quickSort(array, left = 0, right = array.length - 1) {
  if (array.length > 1) {
    let index // 改变量能帮助我们将子数组分离成较小值数组和较大值数组
    /* 划分操作 */
    const pivot = array[Math.floor((right + left) / 2)]  // povit = 8
    let i = left                                         // let i = 0 
    let j = right                                        // let j = 4
    while(i <= j) {                                      // i <= j
      while(array[i] < pivot) {                          // 循环 如果第 i项 比 povit小 ， 指针前移 i = 2
        i++
      }
      while(array[j] > pivot) {                          // 循环 如果第 i项 比 povit大 ， 指针后移 j = 4
        j--
      }
      if (i <= j) {                                      // 左指针索引没有右指针大 交换位置  
        [array[i], array[j]] = [array[j], array[i]]      // [3, 2, 1, 4, 8] 
        i++                                              // i++ = 3
        j--                                              // j-- = 3
      }
    }
    index = i                                            // index = 3
    /* end */

    if (left < index - 1) {
      quickSort(array, left, index-1)                   // quickSort(array, 0, 3) [ 3, 2, 1]
    }
    if (index < right) {
      quickSort(array, index, right)                    // quickSort(array, 3, 4) [4, 8]
    }
  }
  return array;
}


console.log(quickSort([3, 2, 8, 4, 1]))