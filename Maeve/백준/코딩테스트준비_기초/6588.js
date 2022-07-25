// 6588 골드바흐의 추측

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
const MAX = 1000000;

const solution = (input) => {
  input = input.map(Number);
  const eratos = new Array(MAX + 1).fill(1);
  eratos[0] = 0;
  eratos[1] = 0;

  for (let i = 2; i <= Math.sqrt(MAX); i++) {
    if (eratos[i]) {
      for (let j = i * i; j <= MAX; j += i) {
        eratos[j] = 0;
      }
    }
  }

  const answer = [];
  const getAnswer = (number) => {
    for (let i = 3; i <= number; i++) {
      // 홀수니까 i += 2 해도 ok
      if (eratos[i] && eratos[number - i]) {
        answer.push(`${number} = ${i} + ${number - i}`);
        return;
      }
    }
    answer.push(`Goldbach's conjecture is wrong.`);
    return;
  };

  for (let i = 0; i <= input.length - 2; i++) {
    // 마지막 입력 0
    getAnswer(input[i]);
  }

  console.log(answer.join("\n"));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
