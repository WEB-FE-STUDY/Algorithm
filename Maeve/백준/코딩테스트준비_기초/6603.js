// 6603 로또
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  input.pop();
  const testCase = input.map((el) => el.split(" ").map(Number));

  const answerTotal = [];

  function lotto([n, ...test]) {
    const result = [];
    const visited = new Array(test.length + 1).fill(false);
    const answer = [];

    function recursive(count, index) {
      if (count === 6) {
        answer.push(result.join(" "));
        return;
      }

      for (let i = index; i < n; i++) {
        if (!visited[i]) {
          result[count] = test[i];
          visited[i] = true;
          recursive(count + 1, i + 1);
          visited[i] = false;
        }
      }
    }

    recursive(0, 0);
    answerTotal.push(answer.join("\n"));
  }

  for (const data of testCase) {
    const [n, ...test] = data;
    lotto([n, ...test]);
  }

  console.log(answerTotal.join("\n\n"));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
