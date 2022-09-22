// 1707 이분 그래프
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const K = Number(input[0]);
  input.shift();

  function solve(V, E, vertex) {
    const adjList = Array.from(Array(V + 1), () => Array(0));
    const color = new Array(V + 1).fill(0);

    let answer = "YES";

    for (let i = 0; i < E; i++) {
      adjList[vertex[i][0]].push(vertex[i][1]);
      adjList[vertex[i][1]].push(vertex[i][0]);
    }

    // bfs
    // 색을 번갈아 칠함, 매번 확인하면서 인접한 노드가 같은 숫자면 종료
    function bfs(start) {
      const queue = [];
      queue.push(start);
      color[start] = 1; // 일단 1로 칠하기

      while (queue.length !== 0) {
        const front = queue.shift();

        for (let i = 0; i < adjList[front].length; i++) {
          const next = adjList[front][i];
          if (color[next] === 0) {
            // 방문한 적 없고 색 안 칠해져 있음
            queue.push(next);
            color[next] = color[front] * -1;
          } else if (color[next] === color[front]) {
            answer = "NO";
            return;
          }
        }
      }
    }

    for (let i = 1; i <= V; i++) {
      if (!color[i]) {
        color[i] = 1;
        bfs(i);
      }
    }

    console.log(answer);
  }

  while (input.length) {
    const [V, E] = input[0].split(" ").map(Number);
    input.shift();
    const vertex = input.slice(0, E).map((el) => el.split(" ").map(Number));
    input.splice(0, E);
    solve(V, E, vertex);
  }
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 이분 그래프: 인접한 정점끼리 서로 다른 색을 칠해서 모든 정점을 두 가지 색으로만 칠할 수 있는 그래프

// for 문으로 모든 정점에 대해 bfs 돌려야 함 .. 왜지
