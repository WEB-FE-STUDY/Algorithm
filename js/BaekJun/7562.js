const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
const bfs = (width, curLoc, targetLoc, visit) => {
  let count = 0;
  const queue = [];
  const dx = [-2, -1, 1, 2, -2, -1, 1, 2];
  const dy = [1, 2, 2, 1, -1, -2, -2, -1];
  const [targetX, targetY] = targetLoc;
  queue.push(curLoc);
  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const visitLoc = queue.shift();
      if (visitLoc[0] === targetX && visitLoc[1] === targetY) {
        return count;
      }
      dx.forEach((el, idx) => {
        const [movedX, movedY] = [visitLoc[0] + el, visitLoc[1] + dy[idx]];
        if (
          movedX >= 0 &&
          movedX < width &&
          movedY >= 0 &&
          movedY < width &&
          visit[movedX][movedY] === 0
        ) {
          visit[movedX][movedY] = 1;
          queue.push([movedX, movedY]);
        }
      });
    }
    count++;
  }
};
const solution = (input) => {
  let answer = [];
  input.shift();
  for (let i = 0; i < input.length; i += 3) {
    const width = Number(input[i]);
    const curLoc = input[i + 1].split(" ").map(Number);
    const targetLoc = input[i + 2].split(" ").map(Number);
    const visit = new Array(width).fill().map(() => new Array(width).fill(0));
    visit[curLoc] = 1;
    answer.push(bfs(width, curLoc, targetLoc, visit));
  }
  return answer.join("\n");
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
