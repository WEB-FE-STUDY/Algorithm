// 10972 다음 순열
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

  // 뒤에서 부터 오름차순이 끊긴 지점 찾고
  // 2 (1 5) 4 3  // i = 1
  // 2 1 5 4 3
  // 2 3 5 4 1
  // 2 3 1 4 5

  for (let i = N - 2; i >= 0; i--) {
    if (numbers[i] < numbers[i + 1]) {
      broken = i;
      break;
    }
  }

  if (broken === -1) {
    console.log(-1);
    process.exit();
  }

  // 끊긴 지점 뒤의 숫자 중 끊긴 지점보다 크고 가장 작은 수를 구한 후 값을 교체
  let min = 10000;
  let min_index = 0;
  for (let i = N - 1; i > broken; i--) {
    if (numbers[i] > numbers[broken]) {
      if (numbers[i] < min) {
        min = numbers[i];
        min_index = i;
      }
    }
  }

  // 배열 원소 교체
  // const temp = numbers[min_index];
  // numbers.splice(min_index, 1, numbers[broken]);
  // numbers.splice(broken, 1, temp);
  [numbers[min_index], numbers[broken]] = [numbers[broken], numbers[min_index]];

  // 그 숫자 뒤 오름차순으로 정렬해서 붙이기
  // 오름차순으로 정렬 -> 가장 작은 순열 구하는 과정
  const answer = [];
  answer.push(numbers.slice(0, broken + 1));
  answer.push(numbers.slice(broken + 1).sort((a, b) => a - b));
  console.log(answer.flat().join(" "));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 오름차순 순열 구하고 탈출 조건 추가하기 -> 시간 초과
