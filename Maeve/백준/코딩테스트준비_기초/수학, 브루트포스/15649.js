// 15649 N과 M (1)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [N, M] = input.split(" ").map(Number);

  const result = [];
  const visited = new Array(10).fill(false);

  function func(number) {
    if (number === M) {
      console.log(result.join(" "));
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        result[number] = i;
        visited[i] = true;
        func(number + 1);
        visited[i] = false;
      }
    }
  }

  func(0);
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});
