// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const input = [];

// const bfs = (boxes, starts) => {
//   let day = 0;
//   const directions = [[1,0],[ 0,1],[0,-1] ,[-1,0]];
//   const queue = [];
//   starts.map((start) => {
//     queue.push(start);
//     while (queue.length) {
//       const visitLoc = queue.shift();
//       const zerosArr = visit.forEach((width,idx) => {if(width.indexOf(0) !== -1){
//         return [idx, width.indexOf(0)]
//       }}
//       if (zerosArr.length|| zerosArr.forEach((zero)=>{
//         const [zeroX, zeroY] = zero;

//       })) {
//       }
//     }
//   });
// };

// const solution = (input) => {
//   const [width, height] = input.shift().split(" ").map(Number);
//   const visit = new Array(height).fill().map(() => new Array(width).fill(0));
//   const box = input.map((el) => el.split(" ").map(Number));
//   const ripedTomatoes = [];
//   box.forEach((width, idx) => {
//     if (width.indexOf(1) !== -1) {
//       ripedTomatoes.push([idx, width.indexOf(1)]);
//     }
//   });
//   let answer = 0;
//   return answer;
// };

// rl.on("line", (answer) => {
//   input.push(answer.trim());
// }).on("close", () => {
//   console.log(solution(input));
// });

const [[N, M], ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const isOverRange = (r, c) => { // 범위 체크()
  return r < 0 || c < 0 || r >= M || c >= N;
};

const solution = (arr) => {
  const q = [];
  let qIdx = 0;

  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (arr[r][c] === 1) {
        q.push([r, c]);
      }
    }
  }

  const moves = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  while (q.length > qIdx) {
    const [r, c] = q[qIdx++];

    for (const [dr, dc] of moves) {
      const [nr, nc] = [r + dr, c + dc];
      if (isOverRange(nr, nc)) {
        continue;
      }

      if (arr[nr][nc] === 0) {
        arr[nr][nc] = arr[r][c] + 1;
        q.push([nr, nc]);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) {
        return -1;
      }
    }
  }

  return arr.reduce((maxNum, row) => Math.max(maxNum, Math.max(...row)), 0) - 1;
};

const answer = solution(arr);
console.log(answer);
