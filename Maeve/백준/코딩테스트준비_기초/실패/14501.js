// 14501 퇴사

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const dp = new Array(16).fill(0);

const solution = (input) => {
  const N = Number(input[0]);
  input = input.map((el) => el.split(" ").map(Number));

  console.log(input);

  for (let i = N; i >= 1; i--) {
    const [T, P] = input[i];
    if (T + i - 1 > N) {
      dp[i] = dp[i + 1];
      continue;
    }

    dp[i] = Math.max(dp[i + 1], dp[i + T] + P);
    console.log(dp[i]);
  }

  console.log(dp[1]);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 기존 c++ 로직이랑 똑같은데 왜 틀렸는지 모르겠음
