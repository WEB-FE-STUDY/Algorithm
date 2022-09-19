// 13023 ABCDE
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  input.shift();
  const vertex = input.map((el) => el.split(" ").map(Number));
  // const list = Array.from(Array(2001), () => Array(2001).fill(0));
  const adjList = Array.from(Array(N), () => Array(0));
  const visited = new Array(2001).fill(false);
  let answer = 0;

  // 2차원 배열 친구 관계 채우기 -> 인접 행렬에서 인접 리스트로 바꿈
  for (let i = 0; i < vertex.length; i++) {
    // list[vertex[i][0]][vertex[i][1]] = 1;
    // list[vertex[i][1]][vertex[i][0]] = 1;
    adjList[vertex[i][0]].push(vertex[i][1]);
    adjList[vertex[i][1]].push(vertex[i][0]);
  }

  function dfs(index, depth) {
    if (depth === 4) {
      answer = 1;
      return;
    }
    // if (answer) return; -> 없어도 될 것 같음  ...

    // 지금 탐색하는 노드 방문 처리
    visited[index] = true;

    // for문 돌려서 연결되어 있는 노드 찾고
    // 있고 방문한적 없으면 재귀
    // 인덱스의 인접 리스트 길이만큼 돌리기
    for (let i = 0; i < adjList[index].length; i++) {
      const next = adjList[index][i];
      if (!visited[next]) {
        visited[next] = true;
        dfs(next, depth + 1);
        visited[next] = false;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    dfs(i, 0);
    // 방금 탐색한 노드 방문 해제
    visited[i] = false;
    if (answer) break;
  }

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// DFS 로 4개 친구관계 있는 5명 찾으면 됨 -> depth 4까지
// 시간 초과 -> 인접 행렬이 아니라 인접 리스트로 해결해야 함
// 표현해야 할 노드가 많아질수록 인접리스트가 유리
/*
(0, 1), (0, 3), (1, 3)

인접 행렬
0 [0, 1, 0, 1]
1 [1, 0, 0, 1]
2 [0, 0, 0, 0]
3 [1, 1, 0, 0]

인접 리스트
0 [1, 3]
1 [0, 3]
2 []
3 [0, 1]

*/
