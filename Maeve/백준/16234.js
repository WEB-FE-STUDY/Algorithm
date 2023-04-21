// 16234 인구 이동
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

let check = true;

const solution = (input) => {
  const [N, L, R] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split(" ").map(Number));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

/**
 * 1) 인구 이동이 없을 때까지 반복 -> 인구 이동 일어났는지 bool 변수
 * 2) BFS로 인구 이동 -> 방문하지 않은 모든 점에 대해서 bfs 돌리기
 * 3) BFS에서 인구 이동시킬 때 -> 이동하는 지역 점을 따로 저장?
 *
 *
 */
