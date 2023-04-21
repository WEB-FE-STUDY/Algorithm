const [_, ...lines] = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n");
let [r, c, d] = lines.shift().split(" ").map(Number);
const map = lines.map((line) => line.split(" ").map(Number));
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let ans = 0;
const turnLeft = () => (d = (d + 3) % 4);

while (true) {
  let isBack = false;

  if (!map[r][c]) {
    map[r][c] = 2;
    ans += 1;
  }

  for (let i = 0; i < 4; i++) {
    turnLeft();
    const [dr, dc] = directions[d];
    if (!map[r + dr][c + dc]) {
      [r, c] = [r + dr, c + dc];
      break;
    }
    if (i === 3) {
      isBack = true;
    }
  }

  if (isBack) {
    turnLeft();
    turnLeft();
    const [dr, dc] = directions[d];
    if (map[r + dr][c + dc] === 1) {
      break;
    }
    [r, c] = [r + dr, c + dc];
    turnLeft();
    turnLeft();
  }
}
console.log(ans);
