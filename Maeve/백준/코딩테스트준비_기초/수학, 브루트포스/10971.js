// 10971 외판원 순회 2
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input[0]);
  input.shift();
  const matrix = input.map((el) => el.split(" ").map(Number));

  let answer = Number.MAX_SAFE_INTEGER;

  const result = [];
  const visited = new Array(N + 1).fill(false); // 2차원으로 해야 하나 ..? -> no

  // result = [4, 1, 2, 3];
  // 4 1 2 3 4
  function recursive(count) {
    if (count === N) {
      let sum = 0;
      for (let i = 0; i < N - 1; i++) {
        const cost = matrix[result[i] - 1][result[i + 1] - 1];
        if (cost === 0) return; // 갈 수 없는 경우는 return
        sum += cost;
      }
      const returnToStart = matrix[result[N - 1] - 1][result[0] - 1];
      if (returnToStart === 0) return; // 되돌아 올 수 없다면 리턴
      sum += returnToStart;
      answer = Math.min(answer, sum);
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        result[count] = i;
        visited[i] = true;
        recursive(count + 1);
        visited[i] = false;
      }
    }
  }

  recursive(0);
  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 순열 돌리고 sum 구할 때 처리 ...?
// 31번째 줄 안 해서 4번 틀림 -> 마지막으로 돌아올 수 있어야 함 check

// 재귀에 인자로 sum 을 넣어줘도 됨
