// 14391 종이 조각
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  input.shift();
  const papers = input.map((el) => el.split("").map(Number));

  let answer = 0;

  for (let s = 0; s < 1 << (N * M); s++) {
    // n * m 칸이 있으니 각각을 자릿수로 하는 n * m - 1 자리 정수를 만듦
    let sum = 0;
    // 가로(0) 찾기
    for (let i = 0; i < N; i++) {
      let cur = 0;
      for (let j = 0; j < M; j++) {
        let k = i * M + j; // 수 찾기
        if ((s & (1 << k)) === 0) {
          // s의 k번째 비트가 0이면 -> 해당 숫자는 가로
          cur = cur * 10 + papers[i][j];
        } else {
          // 해당 숫자는 세로
          // 지금까지 가로로 붙인 숫자 더하고 cur 초기화
          sum += cur;
          cur = 0;
        }
      }
      sum += cur;
    }

    // 세로(1) 찾기
    for (let i = 0; i < M; i++) {
      let cur = 0;
      for (let j = 0; j < N; j++) {
        let k = j * M + i;
        if ((s & (1 << k)) !== 0) {
          // s의 k번째 비트가 1이면 -> 해당 숫자는 세로
          cur = cur * 10 + papers[j][i];
        } else {
          // 해당 숫자는 가로
          // 지금까지 세로로 붙인 숫자 더하고 cur 초기화
          sum += cur;
          cur = 0;
        }
      }
      sum += cur;
    }
    answer = Math.max(answer, sum);
  }
  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 각각의 칸에 대해 가로로 묶을 것인지 세로로 묶을 것인지 둘 중에 하나 고르는 것
// 0, 1 을 넣어 0은 가로로 더하고 1은 세로로 더한다
// https://code-lab1.tistory.com/101
// https://lemonlemon.tistory.com/9
// 가로조각은 가로줄을 기준으로 탐색하면서 비트가 0이면 계산
// 세로조각도 동일
/*
n, m = 4

0 0 0 1
1 1 0 1
1 1 1 1
0 0 1 1
*/
