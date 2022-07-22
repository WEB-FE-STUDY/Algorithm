const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [num1, num2] = input
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  function getGCD(num1, num2) {
    if (num2 === 0) return num1;
    return getGCD(num2, num1 % num2);
  }
  console.log(getGCD(num1, num2));
  console.log((num1 * num2) / getGCD(num1, num2));
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});
