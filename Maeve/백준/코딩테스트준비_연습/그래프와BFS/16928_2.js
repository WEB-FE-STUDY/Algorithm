// 16928 뱀과 사다리 게임
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input.shift().split(" ").map(Number);

  const laddersNSnakes = {};
  input.forEach((el) => {
    const [from, to] = el.split(" ").map(Number);
    laddersNSnakes[from] = to;
  });

  // console.log(laddersNSnakes);

  const visited = new Array(101).fill(false);

  const queue = [];
  queue.push([1, 0]);
  visited[1] = true;

  while (queue.length !== 0) {
    const [position, count] = queue.shift();

    if (position === 100) {
      console.log(count);
      return;
    }

    for (let i = 1; i <= 6; i++) {
      const nextPosition = position + i;
      if (nextPosition > 100 || visited[nextPosition]) continue;

      if (!laddersNSnakes[nextPosition]) {
        queue.push([nextPosition, count + 1]);
        visited[nextPosition] = true;
      } else {
        // 여기 else로 안 하면 시간초과 남
        if (!visited[laddersNSnakes[nextPosition]]) {
          queue.push([laddersNSnakes[nextPosition], count + 1]);
          visited[laddersNSnakes[nextPosition]] = true;
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
