const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const inputNum = Number(input[0]);
  const inputArr = input[1].split(" ").map(Number);
  const sortedArr = [...inputArr].sort((a, b) => b - a);
  if (inputArr.every((el, idx) => el === sortedArr[idx])) {
    return -1;
  } else {
    let i = inputNum - 2;
    while (inputArr[i] > inputArr[i + 1]) {
      i--;
    }
    let j = inputNum - 1;
    while (inputArr[i] > inputArr[j]) {
      j--;
    }
    console.log(i, j);
    [inputArr[i], inputArr[j]] = [inputArr[j], inputArr[i]];
    return [...inputArr.slice(0, i + 1), ...inputArr.slice(i + 1).sort((a, b) => a - b)].join(" ");
  }
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
