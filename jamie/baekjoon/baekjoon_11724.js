// 연결 요소의 개수
// https://www.acmicpc.net/problem/11724

const fs = require('fs');
const [str, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n] = str.split(' ').map(Number);

const arr = inputs.map(input => input.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);

arr.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});

const visited = [];
let count = 0;

for (let i = 1; i <= n; i++) {
  if (!visited.includes(i)) {
    const queue = [...graph[i]];
    visited.push(i);

    while (queue.length) {
      const num = queue.shift();
      visited.push(num);
      for (let j = 0; j < graph[num].length; j++) {
        if (!visited.includes(graph[num][j]) && !queue.includes(graph[num][j])) queue.push(graph[num][j]);
      }
    }

    count++;
  }
}

console.log(count);
