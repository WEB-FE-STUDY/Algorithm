// 10794 모든 순열
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const N = Number(input);

  const visited = new Array(9).fill(false);
  const result = [];
  const answer = [];

  function recursive(count) {
    if (count === N) {
      answer.push(result.join(" "));
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        result[count] = i;
        visited[i] = true;
        recursive(count + 1);
        visited[i] = false;
      }
    }
  }

  recursive(0);
  console.log(answer.join("\n"));
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});
