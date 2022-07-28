const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const num = Number(input);
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  console.log(arr.join("\n"));
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});
