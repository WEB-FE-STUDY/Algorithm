const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const solution = (input) => {
//   let count = 0;
//   let answer = 0;
//   let inputNum = Number(input);
//   function sumDivisor(num) {
//     let answer = 0;
//     let count = 1;
//     while (count ** 2 <= num) {
//       if (num % count === 0) {
//         answer += count;
//       }
//       count++;
//     }
//     return answer;
//   }
//   while (count <= inputNum) {
//     answer += sumDivisor(count);
//     count++;
//   }
//   return answer;
// };

const solution = (input) => {
  let answer = 0;
  const inputNum = Number(input);
  for (let i = 1; i <= inputNum; i++) {
    answer += i * Math.floor(inputNum / i); // >>0을 하면 숫자의 소숫점을 버리게 됨(비트연산자)
  }
  return answer;
};

rl.on("line", (answer) => {
  console.log(solution(answer));
  rl.close();
});
