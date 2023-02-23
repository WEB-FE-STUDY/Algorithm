// 2503 숫자 야구
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input.shift());
  const answers = input.map((el) => el.split(" ").map(Number));

  const result = [];
  const visited = new Array(10).fill(false);

  let answer = 0;

  const isAvilable = (result, youngsu) => {
    let [ysAnswer, ysStrike, ysBall] = youngsu;
    ysAnswer = String(ysAnswer).split("");

    let [strike, ball] = [0, 0];

    for (let i = 0; i < 3; i++) {
      if (result[i] === ysAnswer[i]) strike++;
      else if (result.includes(ysAnswer[i])) ball++;
    }

    return ysStrike === strike && ysBall === ball;
  };

  const checkNumber = (result) => {
    let count = 0;
    for (let k = 0; k < answers.length; k++) {
      if (isAvilable(result, answers[k])) count++;
    }

    if (count === answers.length) answer++;
  };

  const makeNumber = (count) => {
    if (count === 3) {
      checkNumber(result.map(String));
      return;
    }

    for (let i = 1; i <= 9; i++) {
      if (!visited[i]) {
        result[count] = i;
        visited[i] = true;
        makeNumber(count + 1);
        visited[i] = false;
      }
    }
  };

  makeNumber(0);

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
