// 15652 N과 M (4)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [N, M] = input.split(" ").map(Number);

  const result = [];

  function func(number, current) {
    if (number === M) {
      console.log(result.join(" "));
      return;
    }

    for (let i = current; i <= N; i++) {
      result[number] = i;
      func(number + 1, i);
    }
  }

  func(0, 1);
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});
