// 14499 주사위 굴리기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const dx = [0, 0, -1, 1]; // 이거 다시
const dy = [1, -1, 0, 0];

const dice = [0, 0, 0, 0, 0, 0, 0]; // dice[7];

const TOP = 1;
const BOTTOM = 6;

const roll = (dir) => {
  let [d1, d2, d3, d4, d5, d6] = [dice[1], dice[2], dice[3], dice[4], dice[5], dice[6]];

  if (dir === 1) {
    // 동
    dice[3] = d1;
    dice[1] = d4;
    dice[4] = d6;
    dice[6] = d3;
  }

  if (dir === 2) {
    // 서
    dice[3] = d6;
    dice[1] = d3;
    dice[4] = d1;
    dice[6] = d4;
  }

  if (dir === 3) {
    // 북
    dice[2] = d1;
    dice[1] = d5;
    dice[5] = d6;
    dice[6] = d2;
  }

  if (dir === 4) {
    // 남
    dice[2] = d6;
    dice[1] = d2;
    dice[5] = d1;
    dice[6] = d5;
  }
};

const solution = (input) => {
  const map = [];
  let [N, M, x, y, K] = input.shift().split(" ").map(Number);
  for (let i = 0; i < N; i++) {
    map.push(input.shift().split(" ").map(Number));
  }
  const cmds = input.shift().split(" ").map(Number);

  for (cmd of cmds) {
    const [nx, ny, dir] = [x + dx[cmd - 1], y + dy[cmd - 1], cmd];

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue; // 이동 유효하지 않을 때

    // 주사위 굴려
    roll(dir);

    // 바닥이 0인지 아닌지 처리
    if (map[nx][ny] === 0) map[nx][ny] = BOTTOM;
    else {
      dice[6] = map[nx][ny];
      map[nx][ny] = 0;
    }

    // 출력
    console.log(dice[TOP]);

    // x, y 갱신
    [x, y] = [nx, ny];
  }
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
