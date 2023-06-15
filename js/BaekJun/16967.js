const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [height, width, heightPlus, widthPlus] = input.shift().split(" ").map(Number);
  const sumArr = input.map((line) => line.split(" ").map(Number));
  const originArr = new Array(height).fill(0).map(() => new Array(width).fill(0));
  for (let i = heightPlus; i < height; i++) {
    for (let j = widthPlus; j < width; j++) {
      sumArr[i][j] -= sumArr[i - heightPlus][j - widthPlus];
    }
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      originArr[i][j] = sumArr[i][j];
    }
  }
  return originArr.map((line) => line.join(" ")).join("\n");
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
