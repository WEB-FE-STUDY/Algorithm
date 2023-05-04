// 1863 스카이라인 쉬운 거
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  // console.log(input);
  const N = Number(input.shift());
  let answer = 0;
  const stack = [0];

  for (let i = 0; i < input.length; i++) {
    const [_, y] = input[i].split(" ").map(Number);
    const top = stack.at(-1);

    if (y > top) {
      answer++;
      stack.push(y);
    } else if (y < top) {
      while (stack.at(-1) > y) {
        stack.pop();
      }
      if (stack.at(-1) < y) {
        // 같은 높이가 아니면 새로운 건물로 추가
        answer++;
        stack.push(y);
      }
    }
  }

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
