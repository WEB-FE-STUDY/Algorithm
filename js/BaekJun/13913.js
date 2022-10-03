const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [start, target] = input.split(" ").map(Number);
  const visit = new Array(100001).fill(0);
  const path = new Array(100001).fill(0);
  const bfs = (start, target) => {
    const queue = [];

    queue.push(start);
    visit[start] = 1;
    let count = 0;
    while (queue.length) {
      const length = queue.length;
      for (let i = 0; i < length; i++) {
        const check = queue.shift();
        if (check === target) return count;
        [check - 1, check + 1, check * 2].forEach((el) => {
          if (visit[el] === 0 && el >= 0 && el <= 100000) {
            visit[el] = 1;
            queue.push(el);
            path[el] = check;
          }
        });
      }
      count++;
    }
  };
  const time = bfs(start, target);
  const pathArr = [];
  let beforeLoc = path[target];
  pathArr.push(target);
  for (let i = 0; i < time; i++) {
    pathArr.push(beforeLoc);
    beforeLoc = path[beforeLoc];
  }
  const answer = String(time) + "\n" + pathArr.reverse().join(" ");
  return answer;
};

rl.on("line", (answer) => {
  console.log(solution(answer));
  rl.close();
});
