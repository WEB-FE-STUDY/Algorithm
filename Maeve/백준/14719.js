// 14719 빗물
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [H, W] = input.shift().split(" ").map(Number);
  const WList = input.shift().split(" ").map(Number);

  const map = Array.from(Array(H), () => new Array(W).fill(0));

  for (let i = 0; i < W; i++) {
    let block = WList[i];
    for (let j = 0; j < block; j++) {
      map[H - 1 - j][i] = 1;
    }
  }

  let answer = 0;

  // for (let i = 0; i < H; i++) {
  //   let count = 0;
  //   let wall = 0;
  //   for (let j = 0; j < W; j++) {
  //     if (map[i][j] === 0) {
  //       if (wall === 1) count++;
  //     } else if (map[i][j] === 1) {
  //       if (wall === 1) {
  //         answer += count;
  //         count = 0;
  //         wall = count ? 0 : 1;
  //       } else if (wall === 0) wall++;
  //     }
  //   }
  // }

  for (let i = 1; i < W - 1; i++) {
    const leftMax = Math.max(...WList.slice(0, i));
    const rightMax = Math.max(...WList.slice(i + 1));
    const wallMin = Math.min(leftMax, rightMax);
    if (wallMin > WList[i]) answer += wallMin - WList[i];
  }

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

/** 양 옆이 막혀있어야 함
 * 왼쪽부터 탐색 -> 벽 만나면 다음부터 카운트 -> 다음 벽 만나면 빗물의 양 추가
 *
 */
