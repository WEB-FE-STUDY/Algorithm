const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  input.shift();
  const heightInfo = input.shift().split(" ").map(Number);
  let water = 0;
  for (let i = 0; i < heightInfo.length; i++) {
    const left = Math.max(...heightInfo.slice(0, i + 1));
    const right = Math.max(...heightInfo.slice(i));
    const min = Math.min(left, right);
    water += min - heightInfo[i];
  }

  return water;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
