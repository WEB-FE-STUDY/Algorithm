// 10973 이전 순열

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input[0]);
  const numbers = input[1].split(" ").map(Number);
  let broken = -1;

  for (let i = N - 2; i >= 0; i--) {
    if (numbers[i] > numbers[i + 1]) {
      broken = i;
      break;
    }
  }

  if (broken === -1) {
    console.log(-1);
    process.exit();
  }

  let max = 0;
  let max_index = 0;
  for (let i = N - 1; i > broken; i--) {
    if (numbers[i] < numbers[broken]) {
      if (numbers[i] > max) {
        max = numbers[i];
        max_index = i;
      }
    }
  }

  [numbers[max_index], numbers[broken]] = [numbers[broken], numbers[max_index]];

  const answer = [];
  answer.push(numbers.slice(0, broken + 1));
  answer.push(numbers.slice(broken + 1).sort((a, b) => b - a));
  console.log(answer.flat().join(" "));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 2 1 5 3 4
// 정답: 2 1 4 5 3
// 뒤부터 내림차순 끊긴 지점 찾고
// 2 1 (5 | 3) 4
// 끊긴 지점 뒤부터 index보다 작지만 가장 큰 숫자 골라서 swap
// 2 1 4 | 3 5
// 끊긴 지점 뒤 내림 차순 정렬
// 2 1 4 | 5 3
