const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [n, m, start] = input.shift().split(" ").map(Number);
  const lines = input.map((el) => el.split(" ").map(Number));
  const graph = new Array(n + 1).fill(0).map(() => []);
  lines.forEach((el) => {
    const [x, y] = el;
    graph[x].push(y);
    graph[y].push(x);
  });
  const bfs = (start) => {
    let queue = [];
    const visited = [];
    queue.push(start);
    while (queue.length) {
      const cur = queue.shift();
      if (!visited.includes(cur)) {
        queue = [...queue, ...graph[cur].sort((a, b) => a - b)];
        visited.push(cur);
      }
    }
    return visited;
  };
  const dfs = (start) => {
    let stack = [];
    const visited = [];
    stack.push(start);
    while (stack.length) {
      const cur = stack.pop();
      if (!visited.includes(cur)) {
        stack = [...stack, ...graph[cur].sort((a, b) => b - a)];
        visited.push(cur);
      }
    }
    return visited;
  };

  const answer = dfs(start).join(" ") + "\n" + bfs(start).join(" ");
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
