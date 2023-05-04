const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [n, d, k, c] = input.shift().split(" ").map(Number);
  const el = input.map((el) => Number(el));
  const belt = [...el, ...el];
  const typesLength = [];
  for (let i = 0; i < n; i++) {
    const pick = belt.slice(i, k + i);
    const types = [...new Set(pick)];
    let length = types.length;
    if (!types.includes(c)) length++;
    typesLength.push(length);
  }
  return Math.max(...typesLength);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
