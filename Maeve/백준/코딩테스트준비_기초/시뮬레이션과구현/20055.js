// 20055 컨베이어 벨트 위의 로봇
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [n, k] = input.shift().split(" ").map(Number);
  const belt = input[0].split(" ").map(Number);

  let ans = 0;
  let cnt = 0;

  const robots = belt.map(() => false);
  let upper = Array.from({ length: n }, (_, i) => i);

  const rotate = () => {
    upper = upper.map((index) => (index - 1 >= 0 ? index - 1 : index - 1 + 2 * n));
  };

  while (true) {
    ans += 1;
    rotate(); // 1
    //2
    const [upIdx, downIdx] = [upper[0], upper.at(-1)];
    if (robots[downIdx]) robots[downIdx] = false; // 이거 안 하면 틀림
    for (let i = n - 2; i > 0; i--) {
      const idx = upper[i];
      const nextIdx = upper[i + 1];
      // idx에 로봇이 있고 + nextIdx에 로봇이 없고 내구도가 1 이상이라면
      if (robots[idx] && !robots[nextIdx] && belt[nextIdx]) {
        robots[nextIdx] = true;
        robots[idx] = false;
        belt[nextIdx] -= 1;

        if (belt[nextIdx] === 0) cnt += 1;
      }
    }

    if (robots[downIdx]) robots[downIdx] = false;

    // 3
    if (belt[upIdx]) {
      belt[upIdx] -= 1;
      robots[upIdx] = true;

      if (belt[upIdx] === 0) cnt += 1;
    }

    if (cnt >= k) break;
  }

  console.log(ans);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
