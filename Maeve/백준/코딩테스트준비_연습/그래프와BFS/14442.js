// 14442 벽 부수고 이동 2
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

// 큐 만들어서 사용
class Node {
  constructor(x, y, w, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.c = c;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    if (this.length === 0) return true;
    else return false;
  }

  push(x, y, w, c) {
    let node = new Node(x, y, w, c);
    if (this.length === 0) this.head = node;
    else this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  popleft() {
    let item = this.head;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return item;
  }
}

const solution = (input) => {
  let [N, M, K] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split("").map(Number));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  // 3차원 배열 만들기 - 2에서 K로 확장
  // let visited = Array.from(Array(N), () => new Array(M));
  // for (let i = 0; i < N; i++) {
  //   for (let j = 0; j < M; j++) {
  //     visited[i][j] = new Array(K + 1).fill(false);
  //   }
  // }

  // visited[0][0][0] = true; // visited[][][k] = 지금까지 K개를 부수고 옴

  const visited = Array.from(Array(N), () => new Array(M).fill(K + 1));
  visited[0][0] = 0; // visted[x][y] = (x, y)를 방문할 때 부순 벽의 최소 개수

  // const q = [];
  // q.push([0, 0, 1, 0]); // (x, y, 지나온 칸의 수, 부순 벽의 수)
  // let idx = 0;
  let queue = new Deque();
  queue.push(0, 0, 0, 1); // (x, y, 부순 벽의 수, 지나온 칸의 수)

  while (!queue.isEmpty()) {
    // const [x, y, pass, crashed] = q[idx];
    const node = queue.popleft();

    // if (x === N - 1 && y === M - 1) {
    //   console.log(pass);
    //   return;
    // }

    if (node.x === N - 1 && node.y === M - 1) {
      console.log(node.c);
      return;
    }

    for (let dir = 0; dir < 4; dir++) {
      // const [nx, ny] = [x + dx[dir], y + dy[dir]];
      const [nx, ny] = [node.x + dx[dir], node.y + dy[dir]];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      // const nCrashed = crashed + map[nx][ny]; // (nx, ny)가 벽인 경우 + 1
      const nCrashed = node.w + map[nx][ny];
      if (nCrashed >= visited[nx][ny]) continue; // 벽을 더 많이 부수고 지나간 적이 있다면 continue

      visited[nx][ny] = nCrashed;
      // q.push([nx, ny, pass + 1, nCrashed]);
      queue.push(nx, ny, nCrashed, node.c + 1);

      // q에 넣을 수 있는 경우는 1) 벽이 있는데 뚫을 수 있는 경우 2) 벽이 없는데 방문하지 않은 경우
      // if (map[nx][ny] === 1 && crash < K) {
      //   if (!visited[nx][ny][crash + 1]) {
      //     visited[nx][ny][crash + 1] = true;
      //     q.push([nx, ny, pass + 1, crash + 1]);
      //   }
      // }
      // if (map[nx][ny] === 0 && !visited[nx][ny][crash]) {
      //   visited[nx][ny][crash] = true;
      //   q.push([nx, ny, pass + 1, crash]);
      // }
    }
    // idx++;
  }

  console.log(-1);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

/* 
https://velog.io/@jypapapaa/%EB%B0%B1%EC%A4%80-14442%EB%B2%88-%EB%B2%BD-%EB%B6%80%EC%88%98%EA%B3%A0-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B02

방문 체크 배열을 3차원으로 하여 visited[x][y][w] : 벽을 w번 부수고 지나갈 때의 최단 거리로 풀이할 수 있으나, 자바스크립트는 메모리 초과 발생
-> 벽을 부순 횟수를 2차원 배열에 저장하여 부순 횟수가 더 적을 때만 방문한다
-> visited[x][y] : (x, y)를 방문할 때 부순 벽의 최소 개수 
 

const solution = (input) => {
  let [N, M, K] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split("").map(Number));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  // 3차원 배열 만들기 - 2에서 K로 확장
  let visited = Array.from(Array(N), () => new Array(M));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      visited[i][j] = new Array(K + 1).fill(false);
    }
  }

  visited[0][0][0] = true; // visited[][][k] = 지금까지 K개를 부수고 옴

  const q = [];
  q.push([0, 0, 1, 0]); // (x, y, 지나온 칸의 수, 부순 벽의 수)
  let idx = 0;

  while (idx !== q.length) {
    const [x, y, pass, crash] = q[idx];

    if (x === N - 1 && y === M - 1) {
      console.log(pass);
      return;
    }

    for (let dir = 0; dir < 4; dir++) {
      const [nx, ny] = [x + dx[dir], y + dy[dir]];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      // q에 넣을 수 있는 경우는 1) 벽이 있는데 뚫을 수 있는 경우 2) 벽이 없는데 방문하지 않은 경우
      if (map[nx][ny] === 1 && crash < K) {
        if (!visited[nx][ny][crash + 1]) {
          visited[nx][ny][crash + 1] = true;
          q.push([nx, ny, pass + 1, crash + 1]);
        }
      }
      if (map[nx][ny] === 0 && !visited[nx][ny][crash]) {
        visited[nx][ny][crash] = true;
        q.push([nx, ny, pass + 1, crash]);
      }
    }
    idx++;
  }

  console.log(-1);
};

*/
