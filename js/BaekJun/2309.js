const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const inputNumArr = input.map(Number);
  const sum = inputNumArr.reduce((pre, cur) => pre + cur);
  for (let i = 0; i < inputNumArr.length; i++) {
    for (let j = 1; j < inputNumArr.length; j++) {
      if (sum - (inputNumArr[i] + inputNumArr[j]) === 100) {
        const [num1, num2] = [inputNumArr[i], inputNumArr[j]];
        const answerArr = inputNumArr.filter((num) => num !== num1 && num !== num2);
        return answerArr.sort((a, b) => a - b).join("\n");
      }
    }
  }
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
