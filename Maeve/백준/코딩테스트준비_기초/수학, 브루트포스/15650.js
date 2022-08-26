// 15650 N과 M (2)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [N, M] = input.split(" ").map(Number);

  const result = [];
  const visited = new Array(10).fill(false);

  function func(number, current) {
    if (number === M) {
      console.log(result.join(" "));
      return;
    }

    for (let i = current; i <= N; i++) {
      if (!visited[i]) {
        result[number] = i;
        visited[i] = true;
        func(number + 1, i + 1);
        visited[i] = false;
      }
    }
  }

  func(0, 1);
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});
