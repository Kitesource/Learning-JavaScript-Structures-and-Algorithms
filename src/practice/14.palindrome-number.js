/**
 * 查询 1-max 的所有对称数（数组反转）
 * @param max 最大值
 */
export function findPalindromeNumbers1(max) {
  const res = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    // 转换为字符串，转换为数组，再反转，比较
    const s = i.toString();
    if (s === s.split("").reverse().join("")) {
      res.push(i);
    }
  }

  return res;
}

/**
 * 查询 1-max 的所有对称数（字符串反转）
 * @param max 最大值
 */
export function findPalindromeNumbers2(max) {
  const res = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    const s = i.toString();

    let flag = true;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== s[s.length - i - 1]) {
        flag = false;
      }
    }
    if (flag) res.push(i);
  }

  return res;
}

/**
 * 查询 1-max 的所有对称数（翻转数字）
 * @param max 最大值
 */
export function findPalindromeNumbers3(max) {
  const res = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    let n = i;
    let rev = 0; // 存储翻转数

    // 生成翻转数
    while (n > 0) {
      rev = rev * 10 + (n % 10);
      n = Math.floor(n / 10);
    }

    if (i === rev) res.push(i);
  }

  return res;
}

// console.log(findPalindromeNumbers1(200));

// console.log(findPalindromeNumbers2(200));

console.log(findPalindromeNumbers3(200));

// 性能测试
console.time("findPalindromeNumbers1");
findPalindromeNumbers1(10 * 10000);
console.timeEnd("findPalindromeNumbers1"); // 54.242ms

console.time("findPalindromeNumbers2");
findPalindromeNumbers2(10 * 10000);
console.timeEnd("findPalindromeNumbers2"); // 8.595ms

console.time("findPalindromeNumbers3");
findPalindromeNumbers3(10 * 10000);
console.timeEnd("findPalindromeNumbers3"); // 6.033ms
