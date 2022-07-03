/* 
最大堆类， 和MinHeap类似，它是根部为最大的值， 只需要将所有小于比较 改成 大于 来比较
*/
import MinHeap from "./minHeap";
import { reverseCompare } from '../util'
export class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.compareFn = reverseCompare(compareFn);
  }
}