// 16928 뱀과 사다리 게임
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const snakesNLadders = new Array(101).fill(false);
  const visited = new Array(101).fill(false);

  const [N, M] = input.shift().split(" ").map(Number);

  input.map((el) => {
    const [from, to] = el.split(" ").map(Number);
    snakesNLadders[from] = to;
    // visited[from] = true;  // 이거 하면 안 됨
  });

  const queue = [];
  queue.push([1, 0]);
  visited[1] = true; // 전에 이거 안 함

  while (queue.length !== 0) {
    const [position, count] = queue.shift();

    if (position === 100) {
      console.log(count);
      return;
    }

    for (let i = 1; i <= 6; i++) {
      const nextPosition = position + i;
      if (nextPosition > 100 || visited[nextPosition]) continue;
      // 분기 주의
      if (!snakesNLadders[nextPosition]) {
        // 아무 것도 없을 때
        visited[nextPosition] = true;
        queue.push([nextPosition, count + 1]);
      } else {
        if (!visited[snakesNLadders[nextPosition]]) {
          // 방문하지 않은 사다리나 뱀일 때
          visited[snakesNLadders[nextPosition]] = true;
          queue.push([snakesNLadders[nextPosition], count + 1]);
        }
      }
    }
  }
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 뱀은 절대 타면 안 되는 건가? -> 뱀 포함돼야 하는 경우 있음 https://www.acmicpc.net/board/view/99625

// 출발점이 사다리나 뱀인 경우 -> visited로 중복 방문 방지
