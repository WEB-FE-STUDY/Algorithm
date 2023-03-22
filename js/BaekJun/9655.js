const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const num = Number(input);
  return num % 2 === 0 ? "CY" : "SK";
};

rl.on("line", (answer) => {
  console.log(solution(answer));
  rl.close();
});
