// 7569 토마토
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  shift() {
    if (!this.first) return null;
    let node = this.first;
    if (this.first == this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return node.value;
  }

  length() {
    return this.size;
  }
}

const solution = (input) => {
  const [M, N, H] = input.shift().split(" ").map(Number);
  const map = [];

  for (let height = 0; height < H; height++) {
    const temp = [];
    for (let k = 0; k < N; k++) {
      temp.push(input.shift().split(" ").map(Number));
    }
    map.push(temp);
  }

  // const q = [];
  const q = new Queue();

  let allRiped = true;

  const visited = [];

  for (let h = 0; h < H; h++) {
    visited.push(Array.from(Array(N), () => new Array(M).fill(false)));
  }

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (map[i][j][k] === 1) {
          q.push([i, j, k]);
          visited[i][j][k] = true;
        } else allRiped = false;
      }
    }
  }

  if (allRiped) {
    console.log(0);
    return;
  }

  // 갈 수 있는 방향은 6개
  const dx = [1, 0, -1, 0, 0, 0];
  const dy = [0, 1, 0, -1, 0, 0];
  const dh = [0, 0, 0, 0, 1, -1];

  const bfs = () => {
    let count = 0;

    while (q.length() !== 0) {
      let size = q.length();
      count++;

      for (let i = 0; i < size; i++) {
        const [h, x, y] = q.shift();
        for (let dir = 0; dir < 6; dir++) {
          const [nh, nx, ny] = [h + dh[dir], x + dx[dir], y + dy[dir]];

          if (nx < 0 || nx >= N || ny < 0 || ny >= M || nh < 0 || nh >= H) continue;
          if (map[nh][nx][ny] === 0 && !visited[nh][nx][ny]) {
            q.push([nh, nx, ny]);
            map[nh][nx][ny] = 1;
            visited[nh][nx][ny] = true;
          }
        }
      }
    }

    for (let i = 0; i < H; i++) {
      for (let j = 0; j < N; j++) {
        for (let k = 0; k < M; k++) {
          if (map[i][j][k] === 0) return console.log(-1);
        }
      }
    }

    return console.log(count - 1);
  };

  bfs();
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 큐 구현 안 하면 시간초과 남
