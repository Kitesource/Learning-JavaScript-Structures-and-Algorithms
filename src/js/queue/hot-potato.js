import Queue from './queue.js';

/* 
* 循环队列--击鼓传花游戏
* elementsList 名字数组
* num 要传递的次数
*/
export function hotPotato(elementsList, num) {
  const queue = new Queue();
  const elimitatedList = [];

  // 将名字加入队列
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      // 从队列开头移除一项添加到队尾
      queue.enqueue(queue.dequeue());
    }
    elimitatedList.push(queue.dequeue());
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue()
  };
}

const persons = ['Jack', 'Chen', 'Fu', 'Zhou', 'kite']
const randomNum = Math.floor(Math.random()*50) // 随机生成要传递的次数

const result = hotPotato(persons, randomNum)
result.eliminated.forEach(item => {
  console.log(`${item}在击鼓传花游戏中被淘汰`)
})

console.log(`胜利者: ${result.winner}`)
