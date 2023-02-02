const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input.shift());
  const area = input.map((el) => el.split(""));
  const colorBlindArea = area.map((line) => line.map((el) => (el === "R" ? "G" : el)));
  const visit = new Array(N).fill(0).map((el) => new Array(N).fill(0));
  const colorBlindVisit = new Array(N).fill(0).map((el) => new Array(N).fill(0));
  const way = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let [count, colorBlindCount] = [0, 0];
  const answer = [];

  const isIn = (x, y) => {
    return x < N && y < N && x >= 0 && y >= 0;
  };

  const bfs = (x, y, map, visit, isColorBlind) => {
    const queue = [];
    queue.push([x, y]);
    visit[x][y] = 1;
    while (queue.length) {
      const [curX, curY] = queue.shift();
      for (const [wayX, wayY] of way) {
        const [movedX, movedY] = [curX + wayX, curY + wayY];
        if (isIn(movedX, movedY) && !visit[movedX][movedY]) {
          if (map[x][y] === map[movedX][movedY]) {
            visit[movedX][movedY] = 1;
            queue.push([movedX, movedY]);
          }
        }
      }
    }
    isColorBlind ? colorBlindCount++ : count++;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visit[i][j]) continue;
      bfs(i, j, area, visit, false);
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (colorBlindVisit[i][j]) continue;
      bfs(i, j, colorBlindArea, colorBlindVisit, true);
    }
  }
  answer.push(count, colorBlindCount);
  return answer.join(" ");
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
