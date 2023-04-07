const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const n = Number(input.shift());
  const connectionCount = Number(input.shift());
  const connectionInfo = input.map((line) => line.split(" ").map(Number));
  const connections = new Array(n).fill(0).map((_) => Array.from({ length: 0 }));
  connectionInfo.forEach(([start, end]) => {
    connections[start - 1].push(end - 1);
    connections[end - 1].push(start - 1);
  });

  let count = 0;

  const dfs = () => {
    const visit = new Array(n).fill(0);
    visit[0] = 1;
    const stack = [];
    stack.push(0);
    visit[0] = 1;
    while (stack.length) {
      const cur = stack.pop();
      for (const next of connections[cur]) {
        if (visit[next]) continue;
        visit[next] = 1;
        stack.push(next);
        count++;
      }
    }
  };
  dfs();
  return count;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
