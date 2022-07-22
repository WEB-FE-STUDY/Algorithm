const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  let f = new Array(1000001).fill(1);
  let d = new Array(1000001);
  f[0] = 0;
  d[0] = 0;

  for (let i = 2; i <= 1000000; i++) {
    for (let j = 1; i * j <= 1000000; j++) {
      f[i * j] += i;
    }
  }

  for (let i = 1; i <= 1000000; i++) {
    d[i] = d[i - 1] + f[i];
  }

  const N = input.shift();
  const answer = [];
  input.forEach((v) => {
    answer.push(d[v]);
  });
  return answer.join("\n");
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});

// const input = require("fs").readFileSync("ex/17425.txt").toString().trim().split("\n");
// const solution = (input) => {
//   const inputNumArr = input.map(Number);
//   inputNumArr.shift();
//   inputNumArr.map((input) => {
//     let answer = 0;
//     for (let i = 1; i <= input; i++) {
//       answer += i * ((input / i) >> 0);
//     }
//     console.log(answer);
//   });
// };
// solution(input);
