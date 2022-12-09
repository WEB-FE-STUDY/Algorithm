// 이모티콘
// https://www.acmicpc.net/problem/14226

const fs = require('fs');
const s = Number(fs.readFileSync('/dev/stdin').toString().trim());

// 스크린의 이모티콘 개수를 클립보드에 복사 clipboard = screen
// 클립보드의 이모티콘 개수를 스크린에 추가 screen += clipboard
// 화면에 있는 이모티콘 개수 1개 감소 screen -= 1

// screen, clipboard

const bfs = () => {
  let index = 0;
  let count = 0;

  const queue = [[1, 0]];
  const visited = Array.from({ length: 1001 }, () => []);

  visited[1].push(0);

  while (true) {
    const length = queue.length - index;
    for (let i = 0; i < length; i++) {
      const [screen, clipboard] = queue[index];
      if (screen === s) return count;
      [[screen, screen], [screen + clipboard, clipboard], [screen - 1, clipboard]].forEach(([newScreen, newClipboard]) => {
        if (visited[newScreen] && !visited[newScreen].includes(newClipboard)) {
          queue.push([newScreen, newClipboard]);
          visited[newScreen].push(newClipboard);
        }
      })
      index++;
    }
    count++;
  }
}

console.log(bfs());
