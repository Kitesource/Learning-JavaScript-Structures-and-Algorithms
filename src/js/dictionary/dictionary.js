/* 
字典和集合很相似，集合以[值，值]的形式存储元素，字典则是以[键，值]的形式，字典也称作映射、符号表或关联数组
字典中理想的情况是字符串作为键名，值可以使任何类型
*/
import { defaultToString } from '../util.js';
import { ValuePair } from '../models/value-pair.js';

export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  // 检测一个键是否在字典中
  hasKey(key) {
    return !!this.table[this.toStrFn(key)];
  }
  // 在字典和ValuePair类中设置键和值
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  // 从字典中检索一个值
  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
  // 从字典中移除一个值
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }
  values() {
    return this.keyValues().map(valuePair => valuePair.value);
  }
  keys() {
    return this.keyValues().map(valuePair => valuePair.key);
  }
  keyValues() {
    return Object.values(this.table);
  }
  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return Object.keys(this.table).length;
  }
  clear() {
    this.table = {};
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}

const dictionary = new Dictionary()

dictionary.set('name', 'kite@email.com')
dictionary.set('age', 'kite@age.com')

console.log(dictionary)