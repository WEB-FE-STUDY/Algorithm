// 1963 소수 경로
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const T = Number(input.shift());
  let cases = input.map((el) => el.split(" "));

  const isPrime = new Array(10000).fill(true);
  for (let i = 2; i * i <= 10000; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= 10000; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const solve = (el) => {
    // 큐에 시작점과 카운트 0 넣음
    // 빼서 각 자릿수마다 1 ~ 9까지 넣어봄
    // 정답이면 카운트 출력
    // continue: 소수 아닐 때, 범위 맞지 않을 때, 방문했을 때

    const visited = new Array(10000).fill(false);

    const [from, to] = el;
    const queue = [];
    queue.push([from, 0]);
    visited[from] = true;

    while (queue.length) {
      const [number, count] = queue.shift();
      if (number === to) {
        console.log(count);
        return; // 이거 안 하면 끝까지 다 돌고 impossible 나옴 -> 바로 다음 케이스로 넘겨야 함
      }

      for (let index = 0; index < 4; index++) {
        for (let n = 0; n <= 9; n++) {
          // const nextNumber = String(number).slice(0, index) + String(n) + String(number).slice(index + 1);
          let nextNumber = String(number).split("");
          nextNumber[index] = n;
          nextNumber = nextNumber.join("");

          if (!isPrime[nextNumber]) continue;
          if (visited[nextNumber]) continue;
          if (nextNumber < 1000) continue;

          visited[nextNumber] = true;
          queue.push([nextNumber, count + 1]);
        }
      }
    }

    console.log("Impossible");
  };

  cases.forEach((el) => solve(el));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
