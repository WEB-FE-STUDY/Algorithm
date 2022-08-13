// 1248 Guess
const { checkPrime } = require("crypto");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const n = Number(input[0]);
  let seq_linear = input[1]; // 이거 2차원 배열로 바꿔야 하나

  const seq_matrix = [];

  for (let i = n; i > 0; i--) {
    let row = seq_linear.slice(0, i);
    seq_linear = seq_linear.slice(i);
    row = row.padStart(n, " ");
    seq_matrix.push(row);
  }

  let answer = "";
  const result = [];

  function check(index) {
    let sum = 0;
    for (let i = index; i >= 0; i--) {
      sum = sum + result[i];
      if (seq_matrix[i][index] == "+" && sum <= 0) return false;
      if (seq_matrix[i][index] == "-" && sum >= 0) return false;
      if (seq_matrix[i][index] == "0" && sum !== 0) return false;
    } // 가로로 쭉 체크하면 됨
    return true;
  }

  function recursive(count) {
    if (count === n) {
      answer = result.join(" ");
      // return;
      console.log(answer);
      process.exit();
    }

    for (let i = -10; i <= 10; i++) {
      result[count] = i;
      if (check(count)) recursive(count + 1);
    }
  }

  recursive(0);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// -10 부터 10 까지 전부 다 넣어보기?
