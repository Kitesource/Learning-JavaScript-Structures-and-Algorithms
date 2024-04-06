/**
 * 寻找和为 n 的两个数（嵌套循环）
 * @param arr arr
 * @param n n
 */
function find2NumsSum(arr, target) {
  if (!arr || !target || !arr.length) return [];
  const res = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let a = arr[i];
    let flag = false;

    for (let j = i + 1; j < arr.length; j++) {
      let b = arr[j];
      if (a + b === target) {
        res.push(a, b);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }

  return res;
}

// const arr2 = [10, 20, 30, 40, 50, 60, 70];
// console.log(find2NumsSum(arr2, 50));
// console.log(find2NumsSum(arr2, 120));

// 二分
function find2NumsSum2(arr, target) {
  if (!arr || !target || !arr.length) return [];
  const res = [];

  arr = arr.sort();
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let a = arr[start];
    let b = arr[end];
    const value = a + b;
    if (target < value) {
      end--;
    } else if (target > value) {
      start++;
    } else {
      res.push(a, b);
    }
  }
  return res;
}

// const arr2 = [10, 20, 30, 40, 50, 60, 70];
// console.log(find2NumsSum2(arr2, 50));
// console.log(find2NumsSum2(arr2, 120));

function find2NumsSum3(arr, target) {
  if (!arr || !target || !arr.length) return [];
  const map = new Map();

  for (let i = 0; i <= arr.length - 1; i++) {
    const value = target - arr[i];
    if (map.has(value)) {
      return [arr[map.get(value)], arr[i]];
    }
    map.set(arr[i], i);
  }
  console.log(map);
  return [];
}

const arr2 = [10, 20, 30, 40, 50, 60, 70];
console.log(find2NumsSum3(arr2, 50));
console.log(find2NumsSum3(arr2, 120));
