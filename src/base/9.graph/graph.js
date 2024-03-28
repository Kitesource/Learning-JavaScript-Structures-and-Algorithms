import Dictionary from '../5.dictionary/dictionary.js'

export default class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected // 图是否有向
    this.vertices = [] //存储所有顶点
    this.adjList = new Dictionary() // 字典将会使用顶点作为字典的键，邻接顶点列表作为值
  }
  // 添加顶点
  addVertex(v) {
    if (!this.vertices.includes(v)) { // 只有顶点不存在于图中时才添加
      this.vertices.push(v);
      this.adjList.set(v, []); //设置顶点v作为键对应的字典值为一个空数组
    }
  }
  // 添加边， 建立两个连接的顶点
  addEdge(v, w) {
    // 如果顶点a 和 b不在图中，需要将它们加入顶点列表
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }
    this.adjList.get(v).push(w); // 通过将w加入到v的列表中，我们添加了一条自顶点 v 到 w 的边 (有向图)
    if (!this.isDirected) {
      this.adjList.get(w).push(v); // 再添加一条自 w 到 v 的边 ，使变成无向图
    }
  }
  getVertices() {
    return this.vertices;
  }
  getAdjList() {
    return this.adjList;
  }
  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += '\n';
    }
    return s;
  }
}

const graph = new Graph()

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

for(let i = 0; i < myVertices.length; i += 1) {
  graph.addVertex(myVertices[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('E', 'B')
graph.addEdge('E', 'I')

console.log(graph.toString())
/* 
A -> B C D 
B -> A E F E 
C -> A D G 
D -> A C G H 
E -> B B I 
F -> B 
G -> C D 
H -> D 
I -> E 
*/