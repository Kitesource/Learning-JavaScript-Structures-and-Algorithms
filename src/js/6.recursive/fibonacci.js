/* 递归求斐波那契数列 */
export function fibonacci(n) {
  if (n < 1) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
/* 迭代求斐波那契数列 */
export function fibonacciIterative(n) {
  if (n < 1) { return 0; }
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) {
    fibN = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }
  return fibN;
}
/* 记忆化斐波那契数列 */
export function fibonacciMemoization(n) {
  if (n < 1) { return 0; }
  // 声明一个数组来缓存所有计算结果
  const memo = [0, 1];
  const fibonacciMem = num => {
    if (memo[num] != null) { return memo[num]; } // 如果计算结果被计算了，就返回
    return (memo[num] = fibonacciMem(num - 1) + fibonacciMem(num - 2));
  };
  return fibonacciMem(n);
}
