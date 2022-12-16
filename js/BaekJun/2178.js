const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split("").map(Number));
  const visit = new Array(map.length).fill(0).map((_) => new Array(map[0].length).fill(0));
  const move = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const bfs = () => {
    const queue = [];
    queue.push([[0, 0], 1]);
    visit[0][0] = 1;
    while (queue.length) {
      const [[curX, curY], count] = queue.shift();
      if (curX === N - 1 && curY === M - 1) {
        return count;
      }
      move.forEach(([moveX, moveY]) => {
        const [movedX, movedY] = [curX + moveX, curY + moveY];
        if (
          movedX >= 0 &&
          movedY >= 0 &&
          movedX < N &&
          movedY < M &&
          !visit[movedX][movedY] &&
          map[movedX][movedY] === 1
        ) {
          visit[movedX][movedY] = 1;
          queue.push([[movedX, movedY], count + 1]);
        }
      });
    }
  };
  const answer = bfs();
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
