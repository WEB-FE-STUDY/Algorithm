// 5972 택배 배송
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input.shift().split(" ").map(Number);
  const graph = new Array(N + 1).fill().map(() => []);

  for (let i = 0; i < input.length; i++) {
    const [from, to, dist] = input[i].split(" ").map(Number);
    graph[from].push([to, dist]);
    graph[to].push([from, dist]);
  }

  const path = new Array(N + 1).fill(Infinity);

  const queue = [];
  queue.push(1);
  path[1] = 0;

  while (queue.length) {
    const curPos = queue.shift();

    graph[curPos].forEach((next) => {
      const [nextPos, nextDist] = next;
      if (path[nextPos] > path[curPos] + nextDist) {
        path[nextPos] = path[curPos] + nextDist;
        queue.push(nextPos);
      }
    });
  }

  console.log(path[N]);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// https://han-joon-hyeok.github.io/posts/dijkstra-algorithm/

// 이전 코드에서 시간초과 난 이유 -> shift를 써야 했는데 pop을 씀 ..
