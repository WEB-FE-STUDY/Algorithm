const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [start, target] = input.split(" ").map(Number);
  const visit = new Array(100001).fill(0);

  const bfs = (start, target) => {
    const queue = [];
    queue.push(start);
    visit[start] = 1;
    let count = 0;
    while (queue.length) {
      const length = queue.length;
      for (let i = 0; i < length; i++) {
        const cur = queue.shift();
        if (cur === target) return count;
        [cur - 1, cur + 1, cur * 2].forEach((el) => {
          if (el >= 0 && el <= 100000 && visit[el] === 0) {
            visit[el] = 1;
            queue.push(el);
          }
        });
      }
      count++;
    }
  };
  const answer = bfs(start, target);
  return answer;
};

rl.on("line", (answer) => {
  console.log(solution(answer));
  rl.close();
});
