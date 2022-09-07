const input = require("fs").readFileSync("./dev/stdin.txt").toString().trim();
const [[n, m], ...map] = input.split("\n").map((l, i) => (i ? l.split("") : l.split(" ")).map(Number));
const visited = map.map((a) => a.map((v) => false));
const d = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const queue = [[n - 1, m - 1]];
visited[n - 1][m - 1] = true;

while (queue.length) {
  const [i, j] = queue.shift();
  for ([di, dj] of d) {
    const [ni, nj] = [i + di, j + dj];
    if (map[ni] && map[ni][nj] && !visited[ni][nj]) {
      visited[ni][nj] = true;
      map[ni][nj] = map[i][j] + 1;
      queue.push([ni, nj]);
    }
  }
}
console.log(map);
