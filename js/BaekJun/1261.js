const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [m, n] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split("").map(Number));
  const moveArr = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const bfs = (map, target) => {
    const dequeue = [];
    const visited = new Array(n).fill(0).map(() => new Array(m).fill(0));
    visited[0][0] = 1;
    dequeue.push([0, 0, 0]);
    const [tarX, tarY] = target;
    while (dequeue.length) {
      const [curX, curY, count] = dequeue.shift();
      if (curX === tarX && curY === tarY) {
        return count;
      }
      moveArr.forEach(([X, Y]) => {
        const [moveX, moveY] = [curX + X, curY + Y];
        if (moveX < m && moveX >= 0 && moveY < n && moveY >= 0 && visited[moveY][moveX] === 0) {
          visited[moveY][moveX] = 1;
          if (map[moveY][moveX] === 1) {
            dequeue.push([moveX, moveY, count + 1]);
          } else {
            dequeue.unshift([moveX, moveY, count]);
          }
        }
      });
    }
  };

  const target = [m - 1, n - 1];
  const answer = bfs(map, target);
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
