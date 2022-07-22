const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const inputArr = input[1].split(" ").map(Number);
  console.log(inputArr);
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i * i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  return inputArr.filter(isPrime).length;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
