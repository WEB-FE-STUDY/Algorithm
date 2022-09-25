// 1260 DFS와 BFS
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M, V] = input[0].split(" ").map(Number);
  input.shift();
  const vertex = input.map((el) => el.split(" ").map(Number)).sort((a, b) => a - b); // 작은 수부터 탐색해야 하기 때문에 정렬

  let visited = new Array(1001).fill(false);
  const isConnected = Array.from(Array(1001), () => new Array(1001).fill(false));
  let result = [];
  const queue = [];

  for (let i = 0; i < vertex.length; i++) {
    isConnected[vertex[i][0]][vertex[i][1]] = true;
    isConnected[vertex[i][1]][vertex[i][0]] = true;
  } // 방향이 없었음

  function DFS(current) {
    visited[current] = true; // 방문 체크
    result.push(current); // 방문한 정점 넣고

    for (let i = 1; i <= N; i++) {
      // 방문하지 않았고 연결되어 있으면
      if (!visited[i] && isConnected[current][i]) DFS(i);
    }
  }

  function BFS(current) {
    queue.push(current);
    visited[current] = true;
    result.push(current);

    while (queue.length !== 0) {
      const V = queue.shift(); // and pop

      for (let i = 1; i <= N; i++) {
        if (!visited[i] && isConnected[V][i]) {
          queue.push(i);
          visited[i] = true;
          result.push(i);
        }
      }
    }
  }

  DFS(V);
  console.log(result.join(" "));

  visited = new Array(1001).fill(false);
  result = [];

  BFS(V);
  console.log(result.join(" "));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
