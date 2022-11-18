const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const n = Number(input[0]);
  const s = input[1].split(" ").map(Number);
  const check = new Array(100000 * 20).fill(false);

  for (let i = 1; i < 1 << n; i++) {
    const decimal = i;
    const binary = decimal.toString(2).split("").map(Number);
    binary.fill(0, 0, n - binary.length);

    let sum = 0;
    for (let j = binary.length - 1; j >= 0; j--) {
      if (binary[j]) {
        sum += s[j];
        check[sum] = true;
      }
    }
  }

  for (let i = 1; i < 100000 * 20; i++) {
    if (check[i] === false) {
      console.log(i);
      break;
    }
  }
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
