const input = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n");
const [n, m, k] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((v) => v.split(" ").map(Number));
const visited = Array.from(Array(n), () => Array(m).fill(false));

let max = null;

function solution(arr, visited, k, sum) {
  if (k === 0) {
    max = max === null ? sum : Math.max(max, sum);
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (
        visited[i][j] ||
        (visited[i - 1] ?? [])[j] ||
        (visited[i + 1] ?? [])[j] ||
        visited[i][j - 1] ||
        visited[i][j + 1]
      ) {
        continue;
      }
      visited[i][j] = true;
      solution(arr, visited, k - 1, sum + arr[i][j]);
      visited[i][j] = false;
    }
  }
}

solution(arr, visited, k, 0);
console.log(max);
