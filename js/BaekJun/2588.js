const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [num1, num2] = input.map(Number);
  const num2Arr = String(num2).split("").map(Number).reverse();
  console.log(num2Arr);
  const answer = num2Arr.map((num) => num1 * num);
  answer.push(num1 * num2);
  return console.log(answer.join("\n"));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
