// 2143 두 배열의 합
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const T = Number(input[0]);
  const n = Number(input[1]);
  const A = input[2].split(" ").map(Number);
  const m = Number(input[3]);
  const B = input[4].split(" ").map(Number);

  // 모든 부 배열 쌍의 합을 구함
  const sumA = [];
  let indexA = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += A[j];
      sumA[indexA++] = sum;
    }
  }

  const sumB = [];
  let indexB = 0;
  for (let i = 0; i < m; i++) {
    let sum = 0;
    for (let j = i; j < m; j++) {
      sum += B[j];
      sumB[indexB++] = sum;
    }
  }

  console.log(sumA);
  console.log(sumB);

  // 두 부배열 원소의 합이 T가 되도록 매칭
  // 이진탐색 or 투 포인터
  sumA.sort((a, b) => a - b);
  sumB.sort((a, b) => a - b);

  console.log(sumA);
  console.log(sumB);

  let answer = 0;
  let left = 0;
  let right = sumB.length - 1;

  while (left < sumA.length && right >= 0) {
    let sumAB = sumA[left] + sumB[right];

    if (sumAB > T) {
      // right 을 줄인다
      right--;
    } else if (sumAB < T) {
      // left 를 늘린다
      left++;
    } else if (sumAB === T) {
      // 중복 한 번에 계산
      let [duplicatedA, duplicatedB] = [1, 1];
      while (left < sumA.length - 1 && sumA[left] === sumA[left + 1]) {
        duplicatedA++;
        left++;
      }
      while (right >= 1 && sumB[right] === sumB[right - 1]) {
        duplicatedB++;
        right--;
      }
      answer += duplicatedA * duplicatedB;
      left++; // right--

      // 중복 제거 없애면 왜 안 되는지 모르겠음
      // left++;
      // answer++;
    }
  }

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
