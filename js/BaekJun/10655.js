const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const getDistance = (x1, y1, x2, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

const solution = (input) => {
  const n = Number(input.shift());
  let totalDistance = 0;
  const points = input.map((el) => el.split(" ").map(Number));
  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i - 1];
    const [x2, y2] = points[i];
    totalDistance += getDistance(x1, y1, x2, y2);
  }
  let save = 0;
  for (let i = 1; i < points.length - 1; i++) {
    const [x1, y1] = points[i - 1];
    const [x2, y2] = points[i + 1];
    const [x3, y3] = points[i];
    const saving =
      getDistance(x1, y1, x3, y3) + getDistance(x3, y3, x2, y2) - getDistance(x1, y1, x2, y2);
    save = Math.max(save, saving);
  }
  let answer = totalDistance - save;
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
