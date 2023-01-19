const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const isOverRange = (x, y, N, M) => {
  return x < 0 || y < 0 || x >= N || y >= M;
};

const solution = (input) => {
  const move = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  const maps = [];
  while (input.length > 1) {
    const [width, height] = input.shift().split(" ").map(Number);
    const map = [];
    map.push([width, height]);
    map.push([]);
    for (let i = 0; i < height; i++) {
      map[1].push(input.shift().split(" ").map(Number));
    }
    maps.push(map);
  }
  const bfs = (mapData) => {
    const [width, height] = mapData.shift();
    const map = mapData[0];
    const visit = new Array(height).fill(0).map((_) => new Array(width).fill(0));
    const queue = [];
    let islands = 0;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (visit[i][j]) continue;
        visit[i][j] = 1;
        if (map[i][j]) {
          queue.push([i, j]);
          while (queue.length) {
            const [curY, curX] = queue.shift();
            for (const [moveY, moveX] of move) {
              const [movedY, movedX] = [curY + moveY, curX + moveX];
              if (isOverRange(movedY, movedX, height, width)) {
                continue;
              } else {
                if (!visit[movedY][movedX] && map[movedY][movedX]) {
                  visit[movedY][movedX] = 1;
                  queue.push([movedY, movedX]);
                }
              }
            }
          }
          islands++;
        }
      }
    }
    console.log(islands);
  };
  maps.forEach((el) => bfs(el));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
