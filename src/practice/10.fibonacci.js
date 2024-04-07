/**
 * @description 斐波那契数列
 */

// /**
//  * 斐波那契数列（递归）复杂度 2^n
//  * @param n n
//  */
// function fibonacci(n: number): number {
//     if (n <= 0) return 0
//     if (n === 1) return 1

//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

/**
 * 斐波那契数列（循环）
 * @param n n
 */
// 0 1 1 2 3 5 8 13 21
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let res = 0;
  let n1 = 0; // 记录 n-2 的结果
  let n2 = 1; // 记录 n-1 的结果

  for (let i = 2; i <= n; i++) {
    res = n1 + n2;

    n1 = n2;
    n2 = res;
  }
  return res;
}

console.log(fibonacci(10));
