// 12886 돌 그룹
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [A, B, C] = input.split(" ").map(Number);
  const sum = A + B + C;

  if (sum % 3 !== 0) {
    console.log(0);
    return;
  }

  const getXY = (caseNum, a, b, c) => {
    if (caseNum === 0) return a <= b ? [a, b, c] : [b, a, c];
    if (caseNum === 1) return a <= c ? [a, c, b] : [c, a, b];
    if (caseNum === 2) return b <= c ? [b, c, a] : [c, b, a];
  };

  let isAvailable = false;
  const visited = Array.from(Array(1500), () => new Array(1500).fill(false));

  const bfs = (a, b) => {
    const c = sum - (a + b);
    const [max, min] = [Math.max(a, b, c), Math.min(a, b, c)];
    const queue = [[max, min]];
    visited[max][min] = true; 

    while (queue.length) {
      const [qA, qB, qC] = queue.shift();
      const [qMax, qMin] = [Math.max(qA, qB, qC), Math.min(qA, qB, qC)];

      // if (qA === qB && qB === qC) {
      //   isAvailable = true;
      //   break;
      // }
      if (qMax === qMin) {
        isAvailable = true;
        break;
      }

      for (let i = 0; i < 3; i++) {
        // const [X, Y, left] = getXY(i, qA, qB, qC);
        // if (X === Y) continue;
        // if (Y - X >= 0 && !visited[X + X][Y - X]) queue.push([X + X, Y - X, left]);
        if (qMax - qMin >= 0 && !visited[])
      }
    }
  };

  bfs(A, B);
  console.log(isAvailable ? 1 : 0);
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});
