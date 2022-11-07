const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
let max = 0;

const getMax = (arr, sum) => {
  if (arr.length === 2) {
    if (max < sum) {
      max = sum;
    }
    return;
  } else {
    for (let i = 1; i < arr.length - 1; i++) {
      const bidSum = sum + arr[i - 1] * arr[i + 1];
      const removedArr = arr.filter((_, idx) => idx !== i);
      getMax(removedArr, bidSum);
    }
  }
};

const solution = (input) => {
  input.shift();
  const bids = input[0].split(" ").map(Number);
  getMax(bids, 0);
  const answer = max;
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
