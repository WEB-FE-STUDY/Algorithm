// 숨바꼭질 3
// https://www.acmicpc.net/problem/13549

const fs = require('fs');
let [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

if (n === k) {
  console.log(0);
  return;
}

const moves = [x => x * 2, x => x + 1, x => x - 1];

const queue = [[n, 0]];
const visited = Array.from({ length: 100001 }, () => false);
let index = 0;

visited[n] = 1;

while (queue.length) {
  const [pos, time] = queue[index];

  for (const move of moves) {
    const nextPos = move(pos);
    const isTeleport = pos * 2 === nextPos;
    if (nextPos === k) {
      console.log(isTeleport ? time : time + 1);
      return;
    }
    else {
      if (nextPos >= 0 && nextPos <= 100000 && !visited[nextPos]) {
        if (isTeleport) queue.splice(index + 1, 0, [nextPos, time])
        else queue.push([nextPos, time + 1]);
        visited[nextPos] = true;
      }
    }
  }
  index++;
}
