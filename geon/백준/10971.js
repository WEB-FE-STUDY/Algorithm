const input = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n");
const [[n], ...arr] = input.map((v) => v.split(" ").map(Number));
const visited = Array(n).fill(false);
let answer = Number.MAX_SAFE_INTEGER;

function solution(start, cur, cost) {
  if (visited.every((v) => v) && arr[cur][start]) {
    answer = Math.min(answer, cost + arr[cur][start]);
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i] && arr[cur][i]) {
      visited[i] = true;
      solution(start, i, cost + arr[cur][i]);
      visited[i] = false;
    }
  }
}

for (let i = 0; i < n; i++) {
  visited[i] = true;
  solution(i, i, 0);
  visited[i] = false;
}

console.log(answer);

// 출발

// 비용이 0(자기 자신, 갈 수 없는 도시)이 아니며 방문하지 않은 도시로 이동
// - 방문 처리
// - 비용 추가
// - 재귀
// 갈 수 있는 도시가 없으면 return
// 모든 도시 방문 && 현재 도시에서 시작 도시로 갈 수 있다면
// - 현재까지의 누적 비용 + 현재 도시 -> 시작 도시 비용 갱신 (최소)
