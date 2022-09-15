const [_, ...arr] = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split(/\s+/).map(Number);
const answers = [];
for (let i = 0; i < arr.length; i += 5) {
  answers.push(solution(...arr.slice(i, i + 5)));
}
console.log(answers.join("\n"));

function solution(n, si, sj, ti, tj) {
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const queue = [[si, sj]];
  const ds = [
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
  ];
  visited[si][sj] = 0;
  while (queue.length) {
    const [i, j] = queue.shift();
    if (i === ti && j === tj) {
      return visited[i][j];
    }
    for ([di, dj] of ds) {
      const [ni, nj] = [i + di, j + dj];
      if (visited[i + di] && visited[ni][nj] === false) {
        queue.push([ni, nj]);
        visited[ni][nj] = visited[i][j] + 1;
      }
    }
  }
}
