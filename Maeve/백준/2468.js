// 2468 안전 영역
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input.shift());
  const map = input.map((el) => el.split(" ").map(Number));

  const set = new Set(map.flat().sort((a, b) => a - b));
  const heights = [...set];

  let visited = Array.from(Array(N), () => new Array(N).fill(false));

  const dx = [0, -1, 0, 1];
  const dy = [1, 0, -1, 0];

  let answer = 0;

  const bfs = (i, j) => {
    const q = [];
    q.push([i, j]);
    visited[i][j] = true;

    while (q.length !== 0) {
      const [x, y] = q.shift();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
        if (!visited[nx][ny]) {
          q.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  };

  const check = (height) => {
    visited = Array.from(Array(N), () => new Array(N).fill(false));

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (map[i][j] <= height) {
          visited[i][j] = true;
        }
      }
    }

    let count = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
          bfs(i, j);
          count++;
        }
      }
    }

    answer = Math.max(answer, count);
  };

  for (let i = 0; i <= heights.length; i++) {
    check(heights[i]);
  }

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

/**
 이중 for문 돌면서 방문 체크 (잠긴 지역 색칠)
 다시 이중 for문 돌리면서 bfs 돌아간 횟수 카운트 
 * 
 * 
 * 
 */
