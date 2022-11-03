// 15658 연산자 끼워넣기 (2)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

let max = -Infinity;
let min = Infinity;

const solution = (input) => {
  const N = Number(input.shift());
  const numbers = input.shift().split(" ").map(Number);
  const [plus, minus, mult, division] = input.shift().split(" ").map(Number);

  const dfs = ([pl, mi, mu, di], cnt, sum) => {
    if (cnt === N) {
      max = Math.max(sum, max);
      min = Math.min(sum, min);
      return;
    }

    if (plus > pl) dfs([pl + 1, mi, mu, di], cnt + 1, sum + numbers[cnt]);
    if (minus > mi) dfs([pl, mi + 1, mu, di], cnt + 1, sum - numbers[cnt]);
    if (mult > mu) dfs([pl, mi, mu + 1, di], cnt + 1, sum * numbers[cnt]);
    if (division > di)
      sum < 0 ? dfs([pl, mi, mu, di + 1], cnt + 1, -Math.floor(-sum / numbers[cnt])) : dfs([pl, mi, mu, di + 1], cnt + 1, Math.floor(sum / numbers[cnt]));
  };

  dfs([0, 0, 0, 0], 1, numbers[0]);

  console.log([max, min].join("\n")); // ? .. ? ... ?  .. ?  .. ?

  // 이렇게 하면 틀림 왜지
  // console.log(max);
  // console.log(min);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
