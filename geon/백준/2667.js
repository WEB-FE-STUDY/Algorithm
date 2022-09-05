function bfs(graph, i, j) {
  const queue = [[i, j]];
  const d = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let cnt = 1;
  graph[i][j] = 0;

  while (queue.length) {
    const [i, j] = queue.shift();
    for ([di, dj] of d) {
      if (graph[i + di] && graph[i + di][j + dj]) {
        graph[i + di][j + dj] = 0;
        queue.push([i + di, j + dj]);
        cnt++;
      }
    }
  }
  return cnt;
}
const input = require("fs").readFileSync("./dev/stdin.txt").toString().trim();
const [n, ...map] = input.split("\n").map((line, i) => (i === 0 ? Number(line) : line.split("").map(Number)));
const ans = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j]) {
      ans.push(bfs(map, i, j));
    }
  }
}
console.log(ans.length);
console.log(ans.sort((a, b) => a - b).join("\n"));
