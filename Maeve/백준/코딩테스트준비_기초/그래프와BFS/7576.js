// 7576 토마토
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [M, N] = input[0].split(" ").map(Number);
  input.shift();
  const map = input.map((el) => el.split(" ").map(Number));
  const cost = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  function bfs() {
    const queue = [];
    let idx = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[i][j] === 1) {
          // 1이어야 함
          queue.push([i, j]);
        }
      }
    }

    while (queue.length !== idx) {
      // const [y, x] = queue.shift(); // shift 느리다고 함 -> 인덱스 변수 추가
      const [y, x] = queue[idx];

      for (let i = 0; i < 4; i++) {
        const [ny, nx] = [y + dy[i], x + dx[i]];

        if (ny >= 0 && ny < N && nx >= 0 && nx < M) {
          if (map[ny][nx] === 0) {
            // 0이어야 함
            map[ny][nx] = 1;
            queue.push([ny, nx]);
            cost[ny][nx] = cost[y][x] + 1;
          }
        }
      }
      idx++;
    }

    if (map.flat().includes(0)) console.log(-1);
    else console.log(Math.max(...cost.flat()));
  }

  if (!map.flat().includes(0)) {
    console.log(0);
  } else {
    bfs();
  }
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 최소 날짜를 구함 -> BFS
// 처음에 모두 체크해서 0 없으면 (모두 1이면) 0 출력하고 끝
// BFS 돌려
// 한 번 스캔해서 1인 애들 찾고, 주변 탐색해서 범위 이내면 큐에 담음
// 토마토가 모두 익지 못하는 상황 어떻게 찾아 -> 큐 비었는데 0 남아있으면

// 시간 초과 남 -> 어떻게 해결 .. ?
// shift()로 배열 빼지 말고 데이터 계속 쌓고  idx 변수로 접근한다
// shift() 동작방식 : 0번 빼면 1번을 0번으로, 2번을 1번으로 -> 앞으로 하나씩 다 옮겨서 짱 느림
