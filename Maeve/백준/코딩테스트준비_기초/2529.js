// 2529 부등호

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const k = Number(input[0]);
  const sign = input[1].split(" ");

  let visited = new Array(10).fill(false);
  let max = 0;
  let min = 9999999999;
  const result = [];

  function func(index) {
    if (index === k + 1) {
      // 부등호 k개, 숫자는 (k+1)개

      // 여기서 부등호 체크
      for (let i = 0; i < k; i++) {
        if (sign[i] === "<") {
          if (result[i] > result[i + 1]) return;
        } else {
          // sign[i] === ">"
          if (result[i] < result[i + 1]) return;
        }
      }

      // max & min 업데이트
      const number = result.join("");
      max = Number(number) > Number(max) ? number : max; // Math.max(max, number) 하면 021이 21됨
      min = Number(number) < Number(min) ? number : min;

      return;
    }

    for (let i = 0; i <= 9; i++) {
      if (!visited[i]) {
        result[index] = i;
        visited[i] = true;
        func(index + 1);
        visited[i] = false;
      }
    }
  }

  func(0);
  console.log(max);
  console.log(min);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// P(10, k + 1) 순열 만들고 부등호 만족하는지 테스트하자
