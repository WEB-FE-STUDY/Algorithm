class Queue {
  constructor() {
    this.queue = [];
    this.start = 0;
    this.end = 0;
  }
  enqueue(v) {
    this.queue.push(v);
    this.end += 1;
  }
  dequeue() {
    this.start += 1;
    return this.queue[this.start - 1];
  }
  length() {
    return this.end - this.start;
  }
}

const [m, n, ...arr] = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
const visited = Array.from({ length: n }, () => Array(m).fill(false));
const d = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const box = [];
const queue = new Queue();
let count = 0;
let answer = 0;

for (let i = 0; i < n; i++) {
  box.push([]);
  for (let j = 0; j < m; j++) {
    box[i].push(arr[i * m + j]);
    if (box[i][j] === 1) {
      queue.enqueue([i, j]);
      visited[i][j] = true;
      count += 1;
    } else if (box[i][j] === -1) {
      visited[i][j] = true;
      count += 1;
    }
  }
}

while (queue.length()) {
  const len = queue.length();
  for (let i = 0; i < len; i++) {
    const [i, j] = queue.dequeue();
    for ([di, dj] of d) {
      const [ni, nj] = [i + di, j + dj];
      if (box[ni] && visited[ni][nj] === false) {
        visited[ni][nj] = true;
        queue.enqueue([ni, nj]);
        count += 1;
      }
    }
  }
  if (queue.length()) {
    answer += 1;
  }
  if (count === n * m) {
    break;
  }
}

console.log(count === n * m ? answer : -1);
