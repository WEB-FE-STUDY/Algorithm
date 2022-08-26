// 14889 스타트와 링크

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input[0]);
  input.shift();
  const S = input.map((el) => el.split(" ").map(Number));

  let visited = new Array(21).fill(false);
  let answer = 987654321;
  // let answer = Number.MAX_SAFE_INTEGER;

  function divide(count, index) {
    const start = [];
    const link = [];
    let start_score = 0;
    let link_score = 0;

    if (count === N / 2) {
      // 스타트와 링크 배열에 넣음
      for (let i = 0; i < N; i++) {
        if (visited[i]) start.push(i);
        else link.push(i);
      }

      // 스타트와 링크 배열 계산하기
      for (let i = 0; i < N / 2; i++) {
        for (let j = 0; j < N / 2; j++) {
          start_score += S[start[i]][start[j]];
          link_score += S[link[i]][link[j]];
        }
      }

      const diff = Math.abs(start_score - link_score);
      answer = Math.min(answer, diff);

      return;
    }

    for (let i = index; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        divide(count + 1, i + 1);
        visited[i] = false;
      }
    }
  }

  divide(0, 0);

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 반 나누고
// 그 안에서 각각 더해야 함
