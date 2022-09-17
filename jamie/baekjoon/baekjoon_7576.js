// 토마토
// https://www.acmicpc.net/problem/7576

const fs = require('fs');
const [v, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [m, n] = v.split(' ').map(Number);

const queue = [];
let empty = 0;
let totalCount = 0; // 익은 토마토 개수 카운트
let day = 0;

const box = inputs.map((input, i) => input.split(' ').map((str, j) => {
  if (str > 0) {
    totalCount++;
    queue.push([i, j]);
    return true;
  }
  if (+str === -1) {
    empty++;
    return true;
  }
  return false;
}));

const total = m * n - empty; // 박스의 빈 칸을 제외한 총 개수
let idx = 0;

const move = [[0, -1], [0, 1], [-1, 0], [1, 0]];

// 익은 토마토가 한 개도 없을 경우 예외 처리
if (!totalCount) {
  console.log(-1);
  return;
}

while (queue.length) {
  const curIdx = idx;
  const len = queue.length - curIdx;
  let count = 0; // 개수가 증가했는지 확인하기 위한 값

  if (totalCount === total) break;

  day++;

  for (let i = curIdx; i < curIdx + len; i++) {
    const [curX, curY] = queue[i];

    for (const [x, y] of move) {
      const [movedX, movedY] = [curX + x, curY + y];
      if (box[movedX] && box[movedX][movedY] === false) {
        box[movedX][movedY] = true;
        queue.push([movedX, movedY]);
        count++;
        totalCount++;
      }
    }
    idx++;
  }

  if (count === 0) {
    day = -1;
    break;
  }
}

console.log(day);
