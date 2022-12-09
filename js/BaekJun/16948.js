const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input[0]);
  const [r1, c1, r2, c2] = input[1].split(" ").map(Number);
  const moveArr = [
    [-2, -1],
    [-2, 1],
    [0, -2],
    [0, 2],
    [2, -1],
    [2, 1],
  ];

  const bfs = () => {
    const visited = new Array(N).fill(0).map((_) => new Array(N).fill(0));
    const queue = [];
    queue.push([r1, c1, 0]);
    visited[r1][c1] = 1;
    while (queue.length) {
      const [locX, locY, count] = queue.shift();
      if (locX === r2 && locY === c2) {
        return count;
      }
      moveArr.forEach(([x, y]) => {
        const [movedX, movedY] = [locX + x, locY + y];
        if (movedX < N && movedY < N && movedX >= 0 && movedY >= 0 && !visited[movedX][movedY]) {
          visited[movedX][movedY] = 1;
          queue.push([movedX, movedY, count + 1]);
        }
      });
    }

    return -1;
  };

  const answer = bfs();
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
