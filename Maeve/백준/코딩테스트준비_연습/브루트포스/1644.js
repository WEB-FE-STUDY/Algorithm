// 1644 소수의 연속합
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const MAX = 4000000;

const solution = (input) => {
  const N = Number(input[0]);
  const eratos = new Array(MAX + 1).fill(true);

  for (let i = 2; i * i <= MAX; i++) {
    if (eratos[i]) {
      for (let j = i * i; j <= MAX; j += i) {
        eratos[j] = false;
      }
    }
  }

  const prime = [];

  for (let i = 2; i <= MAX; i++) {
    if (eratos[i]) prime.push(i);
  }

  let [left, right] = [0, 0];
  let answer = 0;
  let sum = prime[0];

  while (right < prime.length) {
    if (prime[left] > N) break;

    if (sum === N) answer++; // N = 2 일 때 예외 발생해서 위치 변경

    if (sum > N) sum -= prime[left++];
    else sum += prime[++right];
  }
  // right을 늘리는 게 나음

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// * 연속적인 * 합 같은 걸 구할 때 투포인터 씀
