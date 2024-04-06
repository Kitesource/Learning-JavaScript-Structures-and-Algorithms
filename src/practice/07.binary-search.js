/**
 * 二分查找（循环）
 * @param arr arr
 * @param target target
 */
function binarySearch(arr, target) {
  if (!arr || arr.length === 0) return -1;

  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const midValue = arr[midIndex];

    if (target < midValue) {
      endIndex = midIndex - 1;
    } else if (target > midValue) {
      startIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

// const arr = [10, 20, 30, 40, 50, 60, 70];
// console.log(binarySearch(arr, 50));
// console.log(binarySearch(arr, 20));
// console.log(binarySearch(arr, 100));

function binarySearch2(arr, target, startIndex = null, endIndex = null) {
  if (!arr || arr.length === 0) return -1;

  if (startIndex == null) startIndex = 0;
  if (endIndex == null) endIndex = arr.length - 1;

  if (startIndex > endIndex) return -1;

  const midIndex = Math.floor((startIndex + endIndex) / 2);
  const midValue = arr[midIndex];

  if (target < midValue) {
    return binarySearch2(arr, target, startIndex, midIndex - 1);
  } else if (target > midValue) {
    return binarySearch2(arr, target, midIndex + 1, endIndex);
  } else {
    return midIndex;
  }
}

// const arr2 = [10, 20, 30, 40, 50, 60, 70];
// console.log(binarySearch2(arr2, 50));
// console.log(binarySearch2(arr2, 20));
// console.log(binarySearch2(arr2, 100));

// 性能测试
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
const target = 90;

console.time("binarySearch1");
for (let i = 0; i < 100 * 10000; i++) {
  binarySearch(arr, target);
}
console.timeEnd("binarySearch1"); // 18.54ms
console.time("binarySearch2");
for (let i = 0; i < 100 * 10000; i++) {
  binarySearch2(arr, target);
}
console.timeEnd("binarySearch2"); // 20.79ms
