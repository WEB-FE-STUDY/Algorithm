const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let answer = 0;
  return answer;
};

rl.on("line", (answer) => {
  console.log(solution(answer));
  rl.close();
});
