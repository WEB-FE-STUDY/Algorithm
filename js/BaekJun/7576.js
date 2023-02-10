const readline = require("readline");

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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [M, N] = input.shift().split(" ").map(Number);
  const visit = new Array(N).fill(0).map(() => new Array(M).fill(0));
  const directions = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0],
  ];
  const box = input.map((el) => el.split(" ").map(Number));
  const queue = new Queue();
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 1) {
        queue.push([i, j]);
        visit[i][j] = 1;
      }
    }
  }

  const isIn = (x, y) => {
    return x >= 0 && x < N && y >= 0 && y < M;
  };

  const isAllRiped = () => {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (box[i][j] !== 1) return false;
      }
    }
    return true;
  };
  if (isAllRiped()) return 0;

  const bfs = () => {
    let count = 0;
    while (queue.length()) {
      const length = queue.length();
      for (let i = 0; i < length; i++) {
        const [curX, curY] = queue.shift();
        for (const [x, y] of directions) {
          const [movedX, movedY] = [curX + x, curY + y];
          if (isIn(movedX, movedY)) {
            if (!box[movedX][movedY] && !visit[movedX][movedY]) {
              visit[movedX][movedY] = 1;
              queue.push([movedX, movedY]);
              box[movedX][movedY] = 1;
            }
          }
        }
      }
      count++;
    }
    count--;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (!box[i][j]) return -1;
      }
    }
    return count;
  };

  let answer = bfs();
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});

// const [[N, M], ...arr] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((row) => row.split(" ").map(Number));

// const isOverRange = (r, c) => { // 범위 체크()
//   return r < 0 || c < 0 || r >= M || c >= N;
// };

// const solution = (arr) => {
//   const q = [];
//   let qIdx = 0;

//   for (let r = 0; r < arr.length; r++) {
//     for (let c = 0; c < arr[0].length; c++) {
//       if (arr[r][c] === 1) {
//         q.push([r, c]);
//       }
//     }
//   }

//   const moves = [
//     [-1, 0],
//     [0, 1],
//     [1, 0],
//     [0, -1],
//   ];

//   while (q.length > qIdx) {
//     const [r, c] = q[qIdx++];

//     for (const [dr, dc] of moves) {
//       const [nr, nc] = [r + dr, c + dc];
//       if (isOverRange(nr, nc)) {
//         continue;
//       }

//       if (arr[nr][nc] === 0) {
//         arr[nr][nc] = arr[r][c] + 1;
//         q.push([nr, nc]);
//       }
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[0].length; j++) {
//       if (arr[i][j] === 0) {
//         return -1;
//       }
//     }
//   }

//   return arr.reduce((maxNum, row) => Math.max(maxNum, Math.max(...row)), 0) - 1;
// };

// const answer = solution(arr);
// console.log(answer);
