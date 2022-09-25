// ABCDE
// https://www.acmicpc.net/problem/13023

const input = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const [[N], ...arr] = input;

const relationship = Array.from({ length: N }, () => []);

arr.forEach(([a, b]) => {
  relationship[a].push(b);
  relationship[b].push(a);
});

const visited = new Array(N).fill(false);

let isExist = 0;

const dfs = (index, dep = 0) => {
  if (dep === 4) isExist = 1;
  else {
    visited[index] = true;
    for (let i = 0; i < relationship[index].length; i++) {
      if (isExist) break;
      if (!visited[relationship[index][i]]) {
        dfs(relationship[index][i], dep + 1);
      }
    }
    visited[index] = false;
  }
};

for (let i = 0; i < N; i++) {
  if (isExist) break;
  dfs(i);
}

console.log(isExist);
