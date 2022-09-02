class Queue {
  constructor() {
    this.queue = [];
    this.start = 0;
    this.end = 0;
  }
  at(i) {
    return this.queue[this.start + i];
  }
  enqueue(v) {
    this.queue.push(v);
    this.end += 1;
  }
  dequeue() {
    this.start += 1;
    return this.queue[this.start - 1];
  }
  getLength() {
    return this.end - this.start;
  }
}

const [n, m, ...lines] = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
// .split("\n")
// .map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: n + 1 }, () => []);
const visited = new Array(n + 1).fill(false);
let ans = 0;
// for ([u, v] of lines) {
//   graph[u].push(v);
//   graph[v].push(u);
// }

for (let i = 0; i < lines.length; i += 2) {
  graph[lines[i]].push(lines[i + 1]);
  graph[lines[i + 1]].push(lines[i]);
}

function dfs(visited, v) {
  visited[v] = true;
  for (u of graph[v]) {
    if (!visited[u]) {
      dfs(visited, u);
    }
  }
}

function bfs(visited, v) {
  const queue = new Queue();
  queue.enqueue(v);
  visited[v] = true;
  while (queue.getLength()) {
    for (u of graph[queue.at(0)]) {
      if (!visited[u]) {
        visited[u] = true;
        queue.enqueue(u);
      }
    }
    queue.dequeue();
  }
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    bfs(visited, i);
    ans += 1;
  }
}
console.log(ans);
