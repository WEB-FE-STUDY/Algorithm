const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  if (input[1] === "0") return input[0].length;
  if (input[0] === "100") return 0;
  let answer = 0;
  const targetArr = input[0].split("").map(Number);
  const numButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const broken = input[2].split(" ").map(Number);
  const workingButtons = numButtons.filter((button) => !broken.includes(button));
  targetArr.forEach((num) => {
    if (workingButtons.includes(num)) {
      answer++;
    } else {
      let [plus, minus] = [num + 1, num - 1];
      while (true) {
        if (workingButtons.includes(plus) && workingButtons.includes(minus)) {
          break;
        }
        if (!workingButtons.includes(plus)) {
          if (plus === 9) {
            plus = 0;
          } else {
            plus += 1;
          }
        }
        if (!workingButtons.includes(minus)) {
          if (minus === 0) {
            minus = 9;
          } else {
            minus -= 1;
          }
        }
      }
      const range = Math.min(Math.abs(num - plus), Math.abs(num - minus));
      answer += range + 1;
    }
  });
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
