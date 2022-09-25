const readline = require("readline");
const { rootCertificates } = require("tls");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
const dfs = (graph, start, visited) => {
  visited[start] = true;
  graph[start].forEach((el) => {
    const next = el;
    if (!visited[next]) {
      dfs(graph, next, visited);
    }
  });
};
const solution = (input) => {
  let answer = 0;
  const node = input.shift().split(" ").map(Number)[0];
  const lineArr = input.map((line) => line.split(" ").map(Number));
  const graph = new Array(node + 1).fill(0).map((el) => []);
  let visited = new Array(node + 1).fill(false);
  lineArr.forEach((line) => {
    const [from, to] = line;
    graph[from].push(to);
    graph[to].push(from);
  });
  for (let i = 1; i < visited.length; i++) {
    if (!visited[i]) {
      dfs(graph, i, visited);
      answer++;
    }
  }
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
