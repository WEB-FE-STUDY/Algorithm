const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [n, k] = input.shift().split(" ").map(Number);
  const kits = input[0].split(" ").map(Number);
  const visit = new Array(n).fill(0);
  let count = 0;
  const check = (day, weight) => {
    if (day === n) {
      count++;
      return;
    }
    if (weight < 0) return;
    for (let i = 0; i < kits.length; i++) {
      if (visit[i]) continue;
      visit[i] = 1;
      const kit = kits[i];
      const afterGymWeight = weight + kit - k;
      check(day + 1, afterGymWeight);
      visit[i] = 0;
    }
  };
  check(0, 0);
  return count;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
