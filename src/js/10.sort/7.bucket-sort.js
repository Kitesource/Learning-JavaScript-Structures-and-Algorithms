import { insertionSort } from './3.insertion-sort.js';

/* 
桶排序(箱排序)  也是分布式算法排序
  它将元素分为不同的桶(较小的数组)，再使用一个简单的排序算法(如插入排序),对每个桶进行排序
  最后将所有桶合并为结果数组
*/
function createBuckets(array, bucketSize) {
  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) { // 迭代找到数组的最大最小值
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  // 计算每个桶中需要分布的元素个数
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1; // (10 -1) / 3 + 1 = 4
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []; // 初始化每个桶 [ [], [], [], [] ]
  }
  for (let i = 0; i < array.length; i++) {
    // 计算要将元素放入哪个桶中
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }
  return buckets;
}
function sortBuckets(buckets) {
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      insertionSort(buckets[i]); // 对每个桶进行插入排序
      sortedArray.push(...buckets[i]);
    }
  }
  return sortedArray;
}
export function bucketSort(array, bucketSize = 5) {
  if (array.length < 2) {
    return array;
  }
  const buckets = createBuckets(array, bucketSize);
  return sortBuckets(buckets);
}

console.log(bucketSort([8, 2, 5, 3, 7, 9, 10, 4, 1, 6], 3))

