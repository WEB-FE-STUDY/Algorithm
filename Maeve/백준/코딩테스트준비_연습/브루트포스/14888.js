// 14888 연산자 끼워넣기

// sol1)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

let max = -Infinity;
let min = Infinity;

const opMap = ["+", "-", "*", "/"];

const solution = (input) => {
  const n = Number(input[0]);
  const numbers = input[1].split(" ").map(Number);
  const opCounts = input[2].split(" ").map(Number);
  const op = [];

  const result = [];
  const visited = new Array(n).fill(false);

  // 연산자 채우기
  for (let i = 0; i < opCounts.length; i++) {
    for (let j = 0; j < opCounts[i]; j++) {
      op.push(opMap[i]);
    }
  }

  const recursive = (count) => {
    if (count === n - 1) {
      let sum = numbers[0];

      for (let i = 0; i < n - 1; i++) {
        if (result[i] === "+") sum += numbers[i + 1];
        if (result[i] === "-") sum -= numbers[i + 1];
        if (result[i] === "*") sum *= numbers[i + 1];
        if (result[i] === "/") sum < 0 ? (sum = -Math.trunc(-sum / numbers[i + 1])) : (sum = Math.trunc(sum / numbers[i + 1]));
      }

      max = Math.max(sum, max);
      min = Math.min(sum, min);

      return;
    }

    for (let i = 0; i < n - 1; i++) {
      if (!visited[i]) {
        result[count] = op[i];
        visited[i] = true;
        recursive(count + 1);
        visited[i] = false;
      }
    }
  };

  recursive(0);
  console.log(max + "\n" + min);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// sol1)
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const input = [];

// let max = -Infinity;
// let min = Infinity;

// const solution = (input) => {
//   const N = Number(input.shift());
//   const numbers = input.shift().split(" ").map(Number);
//   const [plus, minus, mult, division] = input.shift().split(" ").map(Number);

//   const dfs = ([pl, mi, mu, di], cnt, sum) => {
//     if (cnt === N) {
//       max = Math.max(sum, max);
//       min = Math.min(sum, min);
//       return;
//     }

//     if (plus > pl) dfs([pl + 1, mi, mu, di], cnt + 1, sum + numbers[cnt]);
//     if (minus > mi) dfs([pl, mi + 1, mu, di], cnt + 1, sum - numbers[cnt]);
//     if (mult > mu) dfs([pl, mi, mu + 1, di], cnt + 1, sum * numbers[cnt]);
//     if (division > di)
//       sum < 0 ? dfs([pl, mi, mu, di + 1], cnt + 1, -Math.floor(-sum / numbers[cnt])) : dfs([pl, mi, mu, di + 1], cnt + 1, Math.floor(sum / numbers[cnt]));
//   };

//   dfs([0, 0, 0, 0], 1, numbers[0]);

//   console.log([max, min].join("\n"));
// };

// // 15658 연산자 끼워넣기 (2)랑 풀이 똑같음

// rl.on("line", (answer) => {
//   input.push(answer.trim());
// }).on("close", () => {
//   solution(input);
// });
