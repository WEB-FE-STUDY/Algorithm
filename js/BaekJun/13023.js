const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const dfs = (graph, start) => {
  visit[idx] = true
};
const solution = (input) => {
  const [people, friend] = input.shift().split(" ").map(Number);
  const relationsArr = input.map((el) => el.split(" ").map(Number));
  const graph = new Array(people).fill(0).map(() => []);
  relationsArr.map((el) => {
    const [relX, relY] = el;
    graph[relX].push(relY);
    graph[relY].push(relX);
    const visit = [];
  });
  const relations = graph.map((el, idx) => dfs(graph, idx));

  let answer = 0;
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
