const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [r, c, k] = input.shift().split(" ").map(Number);
  const map = input.map((line) => line.split(""));
  const visit = new Array(r).fill(0).map((_) => new Array(c).fill(0));
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (map[i][j] === "T") {
        visit[i][j] = 1;
      }
    }
  }
  visit[r - 1][0] = 1;

  const isIn = (x, y) => x >= 0 && y >= 0 && x < r && y < c;

  const ways = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  let answer = 0;

  const dfs = (x, y, count) => {
    if (count === k && x === 0 && y === c - 1) {
      answer += 1;
      return;
    }
    for (const [wayX, wayY] of ways) {
      const [movedX, movedY] = [x + wayX, y + wayY];
      if (isIn(movedX, movedY)) {
        if (!visit[movedX][movedY] && map[movedX][movedY] === ".") {
          visit[movedX][movedY] = 1;
          dfs(movedX, movedY, count + 1);
          visit[movedX][movedY] = 0;
        }
      }
    }
  };
  dfs(r - 1, 0, 1);
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
