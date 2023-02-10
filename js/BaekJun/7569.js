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
  const [N, M, H] = input.shift().split(" ").map(Number);
  const map = [];
  const queue = new Queue();
  const visit = new Array(H)
    .fill(0)
    .map((_) => new Array(M).fill(0).map((_) => new Array(N).fill(0)));
  for (let i = 0; i < H; i++) {
    const layer = [];
    for (let j = 0; j < M; j++) {
      const line = input.shift().split(" ").map(Number);
      line.forEach((el, idx) => {
        if (el === 1) {
          queue.push([i, j, idx]);
          visit[i][j][idx] = 1;
        }
      });
      layer.push(line);
    }
    map.push(layer);
  }
  const isAllRipen = (map) => {
    for (let i = 0; i < H; i++) {
      for (let j = 0; j < M; j++) {
        for (let x = 0; x < N; x++) {
          if (map[i][j][x] !== 1) return false;
        }
      }
    }
    return true;
  };

  if (isAllRipen(map)) return 0;
  const way = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];

  const isIn = (h, x, y) => {
    return h >= 0 && h < H && x >= 0 && x < M && y >= 0 && y < N;
  };
  const bfs = () => {
    let count = 0;
    while (queue.length()) {
      let length = queue.length();
      for (let i = 0; i < length; i++) {
        const [curH, curX, curY] = queue.shift();
        for (const [wayH, wayX, wayY] of way) {
          const [movedH, movedX, movedY] = [curH + wayH, curX + wayX, curY + wayY];
          if (isIn(movedH, movedX, movedY)) {
            if (map[movedH][movedX][movedY] === 0 && !visit[movedH][movedX][movedY]) {
              visit[movedH][movedX][movedY] = 1;
              map[movedH][movedX][movedY] = 1;
              queue.push([movedH, movedX, movedY]);
            }
          }
        }
      }
      count++;
    }
    for (let i = 0; i < H; i++) {
      for (let j = 0; j < M; j++) {
        for (let x = 0; x < N; x++) {
          if (!map[i][j][x]) return -1;
        }
      }
    }
    return count - 1;
  };

  let answer = bfs();
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
