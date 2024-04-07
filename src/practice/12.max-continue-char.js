/**
 * 求连续最多的字符和次数（嵌套循环）
 * @param str str
 */
function findContinuousChar(str) {
  const res = {
    char: "",
    length: 0,
  };
  if (!str || !str.length) return res;

  let tempLength = 0;

  for (let i = 0; i < str.length; i++) {
    tempLength = 0;

    for (let j = i; j < str.length; j++) {
      if (str[i] === str[j]) {
        tempLength++;
      } else {
        if (tempLength > res.length) {
          res.char = str[i];
          res.length = tempLength;
        }
        i = j - 1;
        break;
      }
    }
  }

  return res;
}

/**
 * 求连续最多的字符和次数（双指针）
 * @param str str
 */
// str[j] === str[i] j 不动，i++
// str[j] !== str[i] 比较当前最大值， j = i
function findContinuousChar2(str) {
  const res = {
    char: "",
    length: 0,
  };
  if (!str || !str.length) return res;

  let j = 0;
  let tempLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[j] === str[i]) {
      tempLength++;
    } else {
      if (tempLength > res.length) {
        res.char = str[j];
        res.length = tempLength;
      }
      tempLength = 0;
      j = i;
      i--;
    }
  }
  return res;
}

// 功能测试
const str = "aabbcccddeeee11223";
console.info(findContinuousChar(str));

const str2 = "aabbbbbbbcccddeeee11223";
console.info(findContinuousChar2(str2));
