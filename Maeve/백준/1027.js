// 1027 고층 건물
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input.shift());
  const heights = input.shift().split(" ").map(Number);

  const count = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    let max = -1000000000;

    for (let j = i + 1; j < N; j++) {
      const width = j - i;
      const height = heights[j] - heights[i];
      const gradient = height / width;

      if (gradient <= max) continue;

      max = gradient;
      count[i]++;
      count[j]++;
    }
  }
  console.log(Math.max(...count));

  // let answer = 0;
  // for (let i = 0; i < N; i++) {
  // let isAvailable = 0;
  // let leftMax = -Infinity;
  // let rightMax = -Infinity;
  // for (let j = i - 1; j >= 0; j--) {
  //   const leftSlope = (heights[j] - heights[i]) / (i - j);
  //   if (leftSlope > leftMax) {
  //     leftMax = leftSlope;
  //     isAvailable++;
  //   }
  // }
  // for (let j = i + 1; j < N; j++) {
  //   const rightSlope = (heights[j] - heights[i]) / (j - i);
  //   if (rightSlope > rightMax) {
  //     rightMax = rightSlope;
  //     isAvailable++;
  //   }
  // }
  // answer = Math.max(answer, isAvailable);
  // }
  // console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
