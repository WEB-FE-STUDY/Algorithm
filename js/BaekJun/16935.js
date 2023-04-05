const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [n, k] = input.split(" ").map(Number);
  const arr = new Array(n).fill(0).map((_) => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    arr[i][0] = 1;
    arr[i][i] = 1;
    for (let j = 1; j < i; j++) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
  }
  let answer = arr[n - 1][k - 1];
  return answer;
};

rl.on("line", (answer) => {
  console.log(solution(answer));
  rl.close();
});
