const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const t = Number(input.shift());
  const answer = [];
  for (let i = 0; i < t; i++) {
    const n = input.shift();
    const test = input
      .splice(0, n)
      .map((el) => el.split(" ").map(Number))
      .sort((a, b) => a[0] - b[0]);
    let count = 1;
    let pass = test[0][1];
    for (let i = 1; i < test.length; i++) {
      const score = test[i][1];
      if (score < pass) {
        count++;
        pass = score;
      }
    }
    answer.push(count);
  }
  return answer.join("\n");
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
