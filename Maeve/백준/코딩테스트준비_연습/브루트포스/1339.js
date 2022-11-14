// 1339 단어 수학
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const n = Number(input.shift());

  const frequency = {};

  for (const word of input) {
    const wordLength = word.length;
    word.split("").forEach((char, i) => {
      if (!frequency[char]) frequency[char] = 0;
      frequency[char] += 10 ** (wordLength - i - 1);
    });
  }

  const sum = Object.values(frequency)
    .sort((a, b) => b - a)
    .reduce((sum, cur, i) => (sum += (9 - i) * cur), 0);

  console.log(sum);

  // {A: 0, B:1, ...}
  // for (let i = 0; i < input.length; i++) {
  //   let mult = 1;
  //   for (let j = input[i].length - 1; j >= 0; j--) {
  //     if (frequency[input[i][j]]) frequency[input[i][j]] += mult;
  //     else frequency[input[i][j]] = mult;
  //     mult *= 10;
  //   }
  // }

  // const sorted = [];
  // for (let letter in frequency) {
  //   sorted.push(frequency[letter]);
  // }

  // sorted.sort((a, b) => b - a);

  // let answer = 0;
  // let max = 9;

  // for (let i = 0; i < sorted.length; i++) {
  //   answer += sorted[i] * max;
  //   max--;
  // }
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
