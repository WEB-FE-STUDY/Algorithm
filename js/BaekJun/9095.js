const { count } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const inputArr = input.map(Number);
  inputArr.shift();
  const memo = new Array(11).fill(0);
  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 4;

  for (let i = 4; i < memo.length; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  }
  inputArr.forEach((el) => {
    console.log(memo[el]);
  });
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
