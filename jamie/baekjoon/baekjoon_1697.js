// 숨바꼭질
// https://www.acmicpc.net/problem/1697

const fs = require('fs');
let [n, k] = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number);

if (n === k) {
  console.log(0);
  return;
}

const moves = [x => x * 2, x => x + 1, x => x - 1];

const queue = [n];
const visited = Array.from({ length: 100001 }, () => false);
let index = 0; // queue의 인덱스
let count = 1; // 몇초인지

visited[n] = true;

while (queue.length) {
  const len = queue.length - index;

  for (let i = 0; i < len; i++) {
    const pos = queue[index];

    for (const move of moves) {
      const nextPos = move(pos);
      if (nextPos === k) {
        console.log(count);
        return;
      }
      else {
        if (nextPos >= 0 && nextPos <= 100000 && !visited[nextPos]) {
          queue.push(nextPos);
          visited[nextPos] = true;
        }
      }
    }
    index++;
  }
  count++;
}
