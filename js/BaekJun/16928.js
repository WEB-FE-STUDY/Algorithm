const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [ladderNum, _] = input.shift().split(" ").map(Number);
  const ladderArr = input.slice(0, ladderNum).map((el) => el.split(" ").map(Number));
  const snakeArr = input.slice(ladderNum, input.length).map((el) => el.split(" ").map(Number));
  const map = new Array(101).fill(0);
  ladderArr.forEach(([de, ar]) => (map[de] = { item: "L", arrive: ar }));
  snakeArr.forEach(([de, ar]) => (map[de] = { item: "S", arrive: ar }));
  const bfs = () => {
    const visit = new Array(101).fill(0);
    const queue = [];
    let count = 0;
    const start = [1, count];
    queue.push(start);
    visit[1] = 1;
    while (queue.length) {
      const [loc, count] = queue.shift();
      if (loc === 100) {
        return count;
      }
      for (let i = 1; i <= 6; i++) {
        const movedLoc = loc + i;
        if (movedLoc > 100 || visit[movedLoc]) continue;
        visit[movedLoc] = 1;
        const mapLoc = map[movedLoc];
        if (mapLoc === 0) {
          queue.push([movedLoc, count + 1]);
        } else {
          queue.push([mapLoc.arrive, count + 1]);
        }
      }
    }
  };

  const answer = bfs();
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
