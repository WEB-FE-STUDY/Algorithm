// 2206 벽 부수고 이동하기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split("").map(Number));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  // 3차원 배열 만들기
  let visited = Array.from(Array(N), () => new Array(M));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      visited[i][j] = new Array(2).fill(0);
    }
  }

  visited[0][0][1] = 1;

  const q = [];
  q.push([0, 0, 1]);
  let idx = 0;

  while (idx !== q.length) {
    // q.shift()는 시간초과 떠서 idx로 접근 시도
    // const [x, y, isAvailable] = q.shift();
    const [x, y, isAvailable] = q[idx];

    if (x === N - 1 && y === M - 1) {
      console.log(visited[N - 1][M - 1][isAvailable]);
      return;
    }

    for (let dir = 0; dir < 4; dir++) {
      const [nx, ny] = [x + dx[dir], y + dy[dir]];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      // q에 넣을 수 있는 경우는 1) 벽이 있는데 뚫을 수 있는 경우 2) 벽이 없는데 방문하지 않은 경우
      if (map[nx][ny] === 1 && isAvailable) {
        visited[nx][ny][0] = visited[x][y][1] + 1;
        q.push([nx, ny, 0]);
      }
      if (map[nx][ny] === 0 && visited[nx][ny][isAvailable] === 0) {
        visited[nx][ny][isAvailable] = visited[x][y][isAvailable] + 1;
        q.push([nx, ny, isAvailable]);
      }
    }
    idx++;
  }

  console.log(-1);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 배열로 큐가 시간초과 나면 -> 하나씩 뽑지 말고 인덱스로 접근하자

// 시간초과가 발생하는 이유 -> https://www.acmicpc.net/board/view/94889
// N과 M이 크다 -> 이중 for문 안 쓰고 풀이

/*
입력:

9 9
000000000
011111110
010000000
110111111
000000000
111111110
000000000
011111111
000000000
 
출력: 
33
 

정답: 
29

https://www.acmicpc.net/board/view/90597
https://www.acmicpc.net/board/view/79649

8 8

01000100 
01010100 
01010100 
01010100 
01010100 
01010100 
01010100 
00010100


3차원 배열로 벽이 뚫린 경우 뚫리지 않은 경우 2가지로 나눠서 풀어야 함 
[x][y][벽 부술 수 있는지]

https://www.acmicpc.net/board/view/67446
https://nahwasa.com/entry/BFS-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%84%88%EB%B9%84-%EC%9A%B0%EC%84%A0-%ED%83%90%EC%83%89-%EB%B0%B0%EC%97%B4-BFS-%EA%B7%B8%EB%9E%98%ED%94%84-BFS
https://hagisilecoding.tistory.com/17
https://jdselectron.tistory.com/61
*/
