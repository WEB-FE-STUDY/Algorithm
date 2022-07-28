const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const year = Number(input);
  let answer = 0;
  if (year % 4 === 0 && year % 100 !== 0) answer = 1;
  if (year % 400 === 0) answer = 1;
  return answer;
};

rl.on("line", (answer) => {
  console.log(solution(answer));
  rl.close();
});
