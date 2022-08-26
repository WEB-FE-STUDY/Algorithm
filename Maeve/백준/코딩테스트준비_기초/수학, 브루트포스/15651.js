// 15651 N과 M (3)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [N, M] = input.split(" ").map(Number);

  const result = [];
  const answer = [];

  function func(number) {
    if (number === M) {
      answer.push(result.join(" "));
      return;
    }

    for (let i = 1; i <= N; i++) {
      result[number] = i;
      func(number + 1);
    }
  }

  func(0);
  console.log(answer.join("\n"));
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});
