const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const day = Number(input[0]);
  const inputArr = input.filter((_, idx) => idx !== 0).map((el) => el.split(" ").map(Number));
  let count = day;
  const sumArr = inputArr.map((_, idx) => {
    let sum = 0;
    let i = idx;
    while (true) {
      const nextSum = inputArr[i][1];
      const nextI = inputArr[i][0];
      if (i + nextI <= count) {
        sum += nextSum;
        i += nextI;
        if (i === count) {
          return sum;
        }
      } else {
        break;
      }
    }
    return sum;
  });
  console.log(sumArr);
  return Math.max(...sumArr);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
