import { swap } from '../util.js';

/* 
Fisher-Yeats 随机算法
  它的含义是迭代数组，从最后一位开始并将当前位置和一个随机位置进行交换，这个随机位置比当前位置小
  这个算法可以保证随机过的位置不会再随机一次
*/
export function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--){
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap(array, i, randomIndex);
  }
  return array;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(shuffle(array))
console.log(shuffle(array))
console.log(shuffle(array))

