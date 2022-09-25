// 나이트의 이동
// https://www.acmicpc.net/problem/7562

const fs = require('fs');
const [n, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const move = [[-1, -2], [-2, -1], [1, -2], [2, -1], [-1, 2], [-2, 1], [1, 2], [2, 1]];

let result = '';

for (let i = 0; i < n; i++) {
  const length = +inputs[3 * i];
  const [startX, startY] = inputs[3 * i + 1].split(' ').map(Number);
  const [endX, endY] = inputs[3 * i + 2].split(' ').map(Number);

  const board = Array.from({ length: length }, () => new Array(length).fill(false));

  const bfs = () => {
    const queue = [[startX, startY]];
    let count = 0;
    while (queue.length) {
      const len = queue.length;

      for (let i = 0; i < len; i++) {
        const [curX, curY] = queue.shift();
        if (curX === endX && curY === endY) return count;

        for (const [x, y] of move) {
          const [movedX, movedY] = [curX + x, curY + y];
          if (board[movedX] && board[movedX][movedY] === false) {
            board[movedX][movedY] = true;
            queue.push([movedX, movedY]);
          }
        }
      }
      count++;
    }
  }
  result += `${bfs()}\n`;
}

console.log(result);
