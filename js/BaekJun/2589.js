const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [height, width] = input.shift().split(" ").map(Number);
  const map = input.map((line) => line.split(""));
  let visit = new Array(height).fill(0).map((_) => new Array(width).fill(0));
  const way = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const isIn = (x, y) => x >= 0 && x < height && y >= 0 && y < width;
  const treasure = [];

  const bfs = (x, y) => {
    const queue = [];
    let count = 0;
    queue.push([x, y, count]);
    visit[x][y] = 1;
    while (queue.length) {
      const [curX, curY, curCount] = queue.shift();
      for (const [wayX, wayY] of way) {
        const [movedX, movedY] = [curX + wayX, curY + wayY];
        if (isIn(movedX, movedY) && !visit[movedX][movedY] && map[movedX][movedY] === "L") {
          visit[movedX][movedY] = 1;
          queue.push([movedX, movedY, curCount + 1]);
          count = curCount + 1;
        }
      }
    }
    treasure.push(count);
  };

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (map[i][j] === "L") {
        bfs(i, j);
        visit = new Array(height).fill(0).map((_) => new Array(width).fill(0));
      }
    }
  }
  const answer = Math.max(...treasure);
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
