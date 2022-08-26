// 15661 링크와 스타트

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
  let answer = Number.MAX_SAFE_INTEGER;

  function divide(count, index) {
    const start = [];
    const link = [];
    let start_score = 0;
    let link_score = 0;

    // 여기서 계산
    // 팀 나누고
    for (let i = 0; i < N; i++) {
      if (visited[i]) start.push(i);
      else link.push(i);
    }

    // 스코어 계산
    for (let i = 0; i < start.length; i++) {
      for (let j = 0; j < start.length; j++) {
        start_score += S[start[i]][start[j]];
      }
    }

    for (let i = 0; i < link.length; i++) {
      for (let j = 0; j < link.length; j++) {
        link_score += S[link[i]][link[j]];
      }
    }

    const diff = Math.abs(start_score - link_score);
    answer = Math.min(answer, diff);

    if (count === N - 1) return; // 팀원은 한 명 이상이어야 함

    // 여기서 재귀
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
