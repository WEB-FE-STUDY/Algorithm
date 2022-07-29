const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  if (input === 0) {
    return 0;
  }
  if (input < 2) {
    return 1;
  }
  return solution(input - 1) + solution(input - 2);
};

rl.on("line", (answer) => {
  console.log(solution(Number(answer)));
  rl.close();
});
