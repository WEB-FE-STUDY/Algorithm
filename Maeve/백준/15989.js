// 15989 1, 2, 3 더하기 4
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  let T = Number(input.shift());
  const numbers = input.map(Number);

  // dp[i][1] : i를 만드는데 1로 끝나는 경우
  // dp[i][2] : i를 만드는데 2로 끝나는 경우
  // dp[i][3] : i를 만드는데 3로 끝나는 경우

  const dp = Array.from(Array(10001), () => new Array(4).fill(0));
  dp[0][1] = 1;
  dp[1][1] = 1;

  for (let i = 2; i <= 10000; i++) {
    dp[i][1] = dp[i - 1][1];
    dp[i][2] = dp[i - 2][1] + dp[i - 2][2];
    if (i >= 3) dp[i][3] = dp[i - 3][1] + dp[i - 3][2] + dp[i - 3][3];
  }

  for (let i = 0; i < numbers.length; i++) {
    console.log(dp[numbers[i]][1] + dp[numbers[i]][2] + dp[numbers[i]][3]);
  }
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
