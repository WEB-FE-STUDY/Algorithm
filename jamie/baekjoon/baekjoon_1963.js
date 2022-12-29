// 소수 경로
// https://www.acmicpc.net/problem/1963

const fs = require('fs');
let [[T], ...cases] = fs.readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(arr => arr.split(' ').map(Number));

const isPrime = Array.from({ length: 10000 }, () => true);

isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i <= 9999; i++) {
  for (let j = i; j <= (9999 / i); j++) {
    isPrime[i * j] = false;
  }
}

const bfs = (start, end) => {
  const visited = Array.from({ length: 10000 }, () => false);
  const queue = [start];
  let index = 0;
  let count = 0;

  visited[start] = true;

  if (start === end) return count;

  while (index < queue.length) {
    count++;
    const length = queue.length;

    for (let i = index; i < length; i++) {
      for (let j = 0; j <= 9; j++) {
        for (let k = 0; k < 4; k++) {
          let newNum = String(queue[index]).split('');
          newNum[k] = j;
          newNum = Number(newNum.join(''));

          if (newNum < 1000) continue;
          if (visited[newNum]) continue;
          if (!isPrime[newNum]) continue;

          visited[newNum] = true;
          if (newNum === end) return count;
          else queue.push(newNum);
        }
      }
      index++;
    }
  }
  return 'Impossible';
}

const answers = cases.map(([start, end]) => bfs(start, end));

console.log(answers.join('\n'));
