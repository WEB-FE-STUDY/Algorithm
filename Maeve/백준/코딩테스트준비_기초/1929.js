// 1929 소수 구하기

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [M, N] = input.split(" ").map(Number);
  const eratos = new Array(N + 1).fill(1); // 처음에 new Array(N) 으로 했다가 틀림
  const answer = [];

  // 에라토스테네스의 체 구현
  eratos[1] = 0; // 1은 소수가 아니다 -> 이거 안 해서 틀림
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (eratos[i]) {
      for (let j = 2; i * j <= N; j++) {
        eratos[i * j] = 0;
      }
      // for (let j = i * i; j <= N; j += i) {
      //   eratos[j] = 0;
      // }
    }
  }

  for (let i = M; i <= N; i++) {
    if (eratos[i]) answer.push(i);
  }
  console.log(answer.join("\n"));
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});
