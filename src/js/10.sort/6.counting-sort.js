/* 
计数排序：
  分布式排序 这种排序和我们之前的排序不同点在于，之前的排序都是相互比较
    确认位置，'计数排序'不存在元素之间的比较和交换操作
  就是遍历数组记录数组下的元素出现过多少次，保存在临时数组中，
  即以原数组每个元素的值作为新数组的下标，而对应下标的新数组元素的值作为出现的次数，相当于是通过下标进行排序。

  (整数排序算法)  时间复杂度O(n+k) k是临时计数数组的大小
*/

function countingSort(array) {
  const maxValue = findMaxValue(array)
  const counts = new Array(maxValue+1) //伪造长度为maxValue+1的元素皆为空的数组
  array.forEach((item) => {
    if (!counts[item]) {
      counts[item] = 0
    }
    counts[item]++ // 把新数组的下标对应加上数组，有一个加一次
  })
  console.log('counts',counts)

  let sortedIndex = 0; // 该数值为下方循环所用起始值
  counts.forEach((count, index) => {
    while(count > 0) {
      array[sortedIndex++] = index
      count--
    }
  })
  return array;
}

function findMaxValue(array) {
  let max = array[0]
  for(let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}

const arr = [2, 3, 8, 7, 2, 7, 3];
console.log(countingSort(arr));   //1,2,2,3,3,7,7,8
