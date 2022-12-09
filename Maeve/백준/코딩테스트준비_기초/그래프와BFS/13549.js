// 13549 숨바꼭질 3
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
  let count = 0;

  function isValid(current) {
    if (current < 0 || current > 100000) return false;
    if (visited[current]) return false;
    return true;
  }

  function bfs() {
    while (queue.length !== 0) {
      const [position, depth, teleport] = queue.shift();

      if (position === K) {
        answer = depth;
        count = teleport;
        break;
      }
      if (isValid(position * 2)) {
        visited[position * 2] = true;
        // console.log(`3: ${position} to ${position * 2}, teleport: ${teleport + 1}`);
        queue.push([position * 2, depth + 1, teleport + 1]);
      }
      if (isValid(position - 1)) {
        visited[position - 1] = true;
        // console.log(`1: ${position} to ${position - 1}, teleport: ${teleport}`);
        queue.push([position - 1, depth + 1, teleport]);
      }
      if (isValid(position + 1)) {
        visited[position + 1] = true;
        // console.log(`2: ${position} to ${position + 1}, teleport: ${teleport}`);
        queue.push([position + 1, depth + 1, teleport]);
      }
    }
  }

  queue.push([N, 0, 0]);
  visited[N] = true;
  bfs();
  console.log(answer - count);
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});

// 숨바꼭질이랑 똑같이 짜고, 순간이동하는 경우 count

// 틀림 -> 큐에 넣는 순서 바꿔야 함
// 반례: 1 4 경우 0초
// visited 때문에 n * 2 가 가장 먼저 와야 함
// 1 -> 2의 경우 n * 2 를 하면 0초, n + 1 을 하면 1초가 걸리고, n + 1 을 먼저 하면 visited[2] = true가 되어 실패
