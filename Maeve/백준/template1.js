const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  console.log(input);
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});
