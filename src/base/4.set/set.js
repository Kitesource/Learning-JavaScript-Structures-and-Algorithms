// 集合是由一组无序且唯一的项组成的，空集就是不包含任何任何元素的集合
class Set {
  constructor() {
    this.items = {}
  }
  has(element) {
    // 使用对象来存储元素集合，可以使用 in 运算符，表示对象在原型链上是否有该属性
    // return element in this.items;
    // 更好实现方式  hasOwnProperty表面对象是否具有特定属性
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return Object.keys(this.items).length;
  }
  clear() {
    this.items = {};
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const values = this.values();
    let objString = `${values[0]}`;
    for (let i = 1; i < values.length; i++) {
      objString = `${objString},${values[i].toString()}`;
    }
    return objString;
  }
  values() {
    return Object.values(this.items);
  }
  // 并集
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }
  // 交集
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }
    // 遍历元素较少的集合
    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }

  // 差集
  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  // 判断是否为子集
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    // every: 返回false 循环停止
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
}

const setA = new Set()
setA.add(1)
setA.add(2)
console.log(setA.values()) // [ 1, 2 ]
const setB = new Set()
setB.add(1)
setB.add(3)
console.log(setB) // Set { items: { '1': 1, '3': 3 } }
const unionAB = setA.union(setB)
console.log(unionAB) // Set { items: { '1': 1, '2': 2, '3': 3 } }