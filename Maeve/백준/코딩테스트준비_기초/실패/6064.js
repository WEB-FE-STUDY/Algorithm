// 6064 카잉 달력

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
const answer = [];

const solution = (input) => {
  input.shift();
  input = input.map((el) => el.split(" ").map(Number));

  const getAnswer = (data) => {
    const [M, N, x, y] = data;

    let initX = 1;
    let initY = 1;
    let count = 1;
    while (true) {
      if (initX === M && initY === N) {
        answer.push(-1);
        break;
      }
      initX = initX < M ? initX + 1 : 1;
      initY = initY < N ? initY + 1 : 1;
      count++;
      if (initX === x && initY === y) {
        answer.push(count);
        break;
      }
    }
  };

  input.forEach((el) => getAnswer(el));
  console.log(answer.join("\n"));
};

rl.on("line", (count) => {
  input.push(count.trim());
}).on("close", () => {
  solution(input);
});
