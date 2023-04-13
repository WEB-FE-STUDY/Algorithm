const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [m, n, _] = input.shift().split(" ").map(Number);
  const squareInfo = input.map((el) => el.split(" ").map(Number));
  const map = new Array(m).fill(0).map((_) => new Array(n).fill(0));
  squareInfo.forEach((info) => {
    const [startX, startY, endX, endY] = info;
    for (let i = startX; i < endX; i++) {
      for (let j = startY; j < endY; j++) {
        if (map[m - 1 - j][i]) continue;
        map[m - 1 - j][i] = 1;
      }
    }
  });
  const squares = [];
  const ways = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const isIn = (x, y) => x >= 0 && y >= 0 && x < m && y < n;

  const visit = new Array(m).fill(0).map((_) => new Array(n).fill(0));

  const dfs = (x, y) => {
    const stack = [];
    stack.push([x, y]);
    visit[x][y] = 1;
    let count = 1;
    while (stack.length) {
      const [curX, curY] = stack.pop();
      ways.forEach(([x, y]) => {
        const [movedX, movedY] = [curX + x, curY + y];
        if (isIn(movedX, movedY)) {
          if (!visit[movedX][movedY] && !map[movedX][movedY]) {
            visit[movedX][movedY] = 1;
            stack.push([movedX, movedY]);
            count++;
          }
        }
      });
    }
    squares.push(count);
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visit[i][j] || map[i][j]) {
        continue;
      } else {
        dfs(i, j);
      }
    }
  }
  let answer = squares.sort((a, b) => a - b).join(" ");
  console.log(squares.length);
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
