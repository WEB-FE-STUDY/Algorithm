// 10655 마라톤 1
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input.shift());
  const points = input.map((el) => el.split(" ").map(Number));
  let totalSum = 0;
  const dists = [];
  let answer = Infinity;

  // 합 다 더하고
  for (let i = 1; i < points.length; i++) {
    const dist = Math.abs(points[i][0] - points[i - 1][0]) + Math.abs(points[i][1] - points[i - 1][1]);
    dists.push(dist);
    totalSum += dist;
  }

  // 빼줌
  for (let i = 1; i < points.length - 1; i++) {
    let sum = totalSum - (dists[i - 1] + dists[i]) + Math.abs(points[i + 1][0] - points[i - 1][0]) + Math.abs(points[i + 1][1] - points[i - 1][1]);

    answer = Math.min(answer, sum);
  }

  // N^2 시간초과 남
  // for (let i = 1; i < points.length - 1; i++) {
  //   for (let j = 1; j < points.length; j++) {
  //     if (i !== j) {
  //       sum += Math.abs(points[j][0] - pastX) + Math.abs(points[j][1] - pastY);
  //       pastX = points[j][0];
  //       pastY = points[j][1];
  //     }
  //   }
  //   answer = Math.min(answer, sum);
  // }

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
