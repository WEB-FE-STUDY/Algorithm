// 7562 - 나이트의 이동
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const t = Number(input[0]);
  input.shift();

  const dx = [1, 2, 2, 1, -1, -2, -2, -1];
  const dy = [-2, -1, 1, 2, 2, 1, -1, -2];

  function getAnswer() {
    const l = Number(input[0]);
    input.shift();
    const [curX, curY] = input[0].split(" ").map(Number);
    input.shift();
    const [destX, destY] = input[0].split(" ").map(Number);
    input.shift();

    // if (curX === destX && curY === destY) {
    //   // 오타였음
    //   console.log(0);
    //   return;
    // }
    // 없어도 됨 -> 아래서 처리 됨

    const visited = Array.from(Array(301), () => Array(301).fill(false));
    const count = Array.from(Array(301), () => Array(301).fill(0));
    const queue = [];

    visited[curX][curY] = true;
    queue.push([curX, curY]);

    while (queue.length !== 0) {
      const [x, y] = queue.shift();

      if (x === destX && y === destY) {
        console.log(count[x][y]);
        break;
      }

      for (let i = 0; i < 8; i++) {
        const [nextX, nextY] = [x + dx[i], y + dy[i]];

        // 범위 안에 있고 방문한 적 없으면 큐에 넣고 방문 처리
        if (nextX >= 0 && nextX < l && nextY >= 0 && nextY < l) {
          if (!visited[nextX][nextY]) {
            visited[nextX][nextY] = true;
            queue.push([nextX, nextY]);
            count[nextX][nextY] = count[x][y] + 1;
          }
        }
      }
    }
  }

  for (let i = 0; i < t; i++) {
    getAnswer();
  }
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 범위 내에 있고 방문한 적 없으면 큐에 추가, 도착하면 값 업데이트하고 while문 break
// count를 어디에 추가해야 할지 모르겠음
// BFS의 level 구하기 https://www.acmicpc.net/board/view/12343
