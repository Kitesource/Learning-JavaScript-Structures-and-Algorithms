/*
 散列表 可以用来对数据库进行索引，当我们在关系型数据库中新建一个表时，同时创建一个索引来更快地查询到记录的key, 
 此时散列表可以用来保存键和对表中记录的引用。 另一个常见的引用是使用散列表来表示对象，javascript语言内部就是使用散列表来表示每个对象。
*/
import { defaultToString } from '../util.js'
import { ValuePair } from '../models/value-pair.js'
class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      // charCodeAt() 方法可返回指定位置的字符的 Unicode 编码
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }
  hashCode(key) {
    return this.loseloseHashCode(key);
  }
  // 将键和值加入散列表
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  // 从散列表中取一个值
  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }
}

const hashTable = new HashTable()

hashTable.put('name', 'kite@email.com')
hashTable.put('age', 'kite@age.com')

console.log(hashTable)
// table: {
//   '5': ValuePair { key: 'age', value: 'kite@age.com' },
//   '10': ValuePair { key: 'name', value: 'kite@email.com' }
// }

console.log(hashTable.get('age')) // => kite@age.com