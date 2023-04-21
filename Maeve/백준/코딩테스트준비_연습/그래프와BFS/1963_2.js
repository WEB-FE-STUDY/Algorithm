// 1963 소수 경로
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const T = Number(input.shift());
  const cases = input.map((el) => el.split(" "));

  const isPrime = new Array(10001).fill(true);
  for (let i = 2; i * i <= 10000; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= 10000; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const solve = (el) => {
    const visited = new Array(10000).fill(false);
    const queue = [];
    const [from, to] = el;
    queue.push([from, 0]);
    visited[from] = true;

    while (queue.length) {
      const [number, count] = queue.shift();

      if (number === to) {
        console.log(count);
        return;
      }

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 10; j++) {
          let nextNumber = number.split("");
          nextNumber[i] = j;
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
