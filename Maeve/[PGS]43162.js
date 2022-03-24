// 네트워크

let visited = Array.from({ length: 20 }, () => 0); // 배열 생성 시 0으로 초기화

function dfs(V, n, computers) {
  visited[V] = 1; // 방문처리

  for (let i = 0; i < n; i++) {
    if (!visited[i] && computers[V][i]) {
      // 방문 안 했고 & 연결되어 있으면
      dfs(i, n, computers);
    }
  }
}

function solution(n, computers) {
  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // 방문하지 않았을 때만 탐색한다
      answer++;
      dfs(i, n, computers);
    }
  }

  return answer;
}
