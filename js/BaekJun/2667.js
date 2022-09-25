const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
const dfs = (graph, start) => {
  const visited = [];
  let stack = [];
  stack.push(start);
  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      stack = [...graph[node], ...stack];
    }
  }
};
const solution = (input) => {
  const size = Number(input.shift());
  const arr = input.map((el) => el.split(" ").map(Number));
  let answer = 0;
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
