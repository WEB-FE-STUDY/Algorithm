// 1182 부분수열의 합
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, S] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);
  let answer = 0;

  // 재귀를 이용한 풀이
  // function recursive(index, sum) {
  //   if (index === N) return;
  //   if (sum + numbers[index] === S) answer++;
  //   recursive(index + 1, sum + numbers[index]);
  //   recursive(index + 1, sum);
  // }

  // recursive(0, 0);

  // 비트마스크를 이용한 풀이
  for (let i = 1; i < 1 << N; i++) {
    let sum = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (i & (1 << j)) sum += numbers[j];
    }
    if (sum === S) answer++;
  }

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 부분 수열: 어떠한 수열에서 일부 숫자를 지워서 만들 수 있는 수열 (연속되지 않아도 됨)
// 3 2 5 2 3 1 4 의 부분 수열
// 3 5 1 4 (ok)
