// DFS와 BFS
// https://www.acmicpc.net/problem/1260

const fs = require('fs');
const [str, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, , v] = str.split(' ').map(Number);

let arr = Array.from({ length: n + 1 }, () => []);

inputs.forEach((input) => {
  const [a, b] = input.split(' ').map(Number);
  arr[a].push(b);
  arr[b].push(a);
});

arr = arr.map(item => item.sort((a, b) => a - b));

const dfs = () => {
  const visited = [];
  visited.push(v);

  const recursive = (start) => {
    if (visited.length === n) return;
    for (let i = 0; i < arr[start].length; i++) {
      if (!visited.includes(arr[start][i])) {
        visited.push(arr[start][i]);
        recursive(arr[start][i]);
      }
    }
  }

  recursive(v);

  console.log(visited.join(' '));
}

const bfs = () => {
  const visited = [];
  const queue = [];
  queue.push(v);

  while (queue.length) {
    const num = queue.shift();
    visited.push(num);
    for (let i = 0; i < arr[num].length; i++) {
      if (!visited.includes(arr[num][i]) && !queue.includes(arr[num][i])) queue.push(arr[num][i]);
    }
  }

  console.log(visited.join(' '));
}

dfs();
bfs();
