// 17427 약수의 합 2

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const getPrimeSum = (number) => {
//   // 브루트포스로 루트 number까지 계산 -> 시간 초과
//   let sum = 0;
//   for (let i = 1; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       sum += i;
//       if (i !== Math.sqrt(number)) sum += number / i;
//     }
//   }
//   return sum;
// };

const solution = (input) => {
  let answer = 0;

  for (let i = 1; i <= input; i++) {
    // answer += getPrimeSum(i);
    answer += Math.floor(input / i) * i;
  }

  console.log(answer);
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});
