// 1697 숨바꼭질
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [N, K] = input.split(" ").map(Number);
  const queue = [];
  const visited = new Array(100001).fill(false);
  let answer = 0;

  function isValid(current) {
    if (current < 0 || current > 100000) return false;
    if (visited[current]) return false;
    return true;
  }

  function bfs() {
    while (queue.length !== 0) {
      const [position, depth] = queue.shift();

      if (position === K) {
        answer = depth;
        break;
      }

      if (isValid(position - 1)) {
        visited[position - 1] = true;
        queue.push([position - 1, depth + 1]);
      }
      if (isValid(position + 1)) {
        visited[position + 1] = true;
        queue.push([position + 1, depth + 1]);
      }
      if (isValid(position * 2)) {
        visited[position * 2] = true;
        queue.push([position * 2, depth + 1]);
      }
    }
  }

  queue.push([N, 0]);
  visited[N] = true;
  bfs();
  console.log(answer);
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});
