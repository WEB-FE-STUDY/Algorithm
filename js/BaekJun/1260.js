const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const bfs = (graph, start) => {
  const visited = [];
  let needToVisit = [];
  needToVisit.push(start);
  while (needToVisit.length !== 0) {
    const node = needToVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      const nodes = graph[node];
      needToVisit = [...needToVisit, ...nodes.sort((a, b) => a - b)];
    }
  }
  return visited;
};
const dfs = (graph, start) => {
  const visited = [];
  let needToVisit = [];
  needToVisit.push(start);
  while (needToVisit.length !== 0) {
    const node = needToVisit.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      const nodes = graph[node];
      needToVisit = [...needToVisit, ...nodes.sort((a, b) => b - a)];
    }
  }

  return visited;
};

const solution = (input) => {
  const [node, line, start] = input.shift().split(" ").map(Number);
  const linesArr = input.map((el) => el.split(" ").map(Number));
  //   const graph = new Array(node + 1).fill([]); // fill은 fill 안에 들어간 것 하나만 계속 추가한다! 배열을 넣으면 주소값이 똑같은 배열을 여러개 넣게 됨!
  const graph = [...Array(node + 1)].map((e) => []);
  console.log(graph);
  for (let i = 0; i < line; i++) {
    const [from, to] = linesArr[i];
    graph[from].push(to);
    graph[to].push(from);
  }
  console.log(graph);
  const answer = dfs(graph, start).join(" ") + "\n" + bfs(graph, start).join(" ");
  return answer;
};
rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
