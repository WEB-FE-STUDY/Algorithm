// 14395 4연산
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [s, t] = input[0].split(" ").map(Number);

  const ds = [
    ["*", (x) => x * x],
    ["+", (x) => x + x],
    ["-", (x) => x - x],
    ["/", (x) => x / x],
  ];

  const visited = [];

  if (s === t) {
    console.log(0);
    return;
  }

  const queue = [[s, ""]];

  while (queue.length !== 0) {
    const [sum, ops] = queue.shift();

    if (sum === t) {
      console.log(ops);
      return;
    }

    for (const [op, calc] of ds) {
      const nextSum = calc(sum);
      // let nextSum = 0;
      // if (op === "*") nextSum = sum * sum;
      // else if (op === "+") nextSum = sum + sum;
      // else if (op === "-") nextSum = sum - sum;
      // else nextSum = sum / sum;

      if (!visited[nextSum]) {
        visited[nextSum] = true;
        queue.push([nextSum, ops + op]);
      }
    }
  }

  console.log(-1);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
