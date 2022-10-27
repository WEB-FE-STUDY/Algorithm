const TOP = 0;
const BOTTOM = 5;
const lines = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n");
const [n, m, x, y, k] = lines.shift().split(" ").map(Number);
const cmds = lines.pop().split(" ").map(Number);
const map = lines.map((line) => line.split(" ").map(Number));
const dx = [null, 0, 0, -1, 1];
const dy = [null, 1, -1, 0, 0];
let dice = [0, 0, 0, 0, 0, 0];
let [r, c] = [x, y];

function rollDice(cmd) {
  if (cmd === 1) {
    dice = [dice[2], dice[1], dice[5], dice[0], dice[4], dice[3]];
  } else if (cmd === 2) {
    dice = [dice[3], dice[1], dice[0], dice[5], dice[4], dice[2]];
  } else if (cmd === 3) {
    dice = [dice[4], dice[0], dice[2], dice[3], dice[5], dice[1]];
  } else if (cmd === 4) {
    dice = [dice[1], dice[5], dice[2], dice[3], dice[0], dice[4]];
  }
}

for (cmd of cmds) {
  const [nr, nc] = [r + dx[cmd], c + dy[cmd]];
  if (map[nr] && map[nr][nc] >= 0) {
    [r, c] = [nr, nc];
    rollDice(cmd);
    if (map[r][c]) {
      dice[BOTTOM] = map[r][c];
      map[r][c] = 0;
    } else {
      map[r][c] = dice[BOTTOM];
    }
    console.log(dice[TOP]);
  }
}
