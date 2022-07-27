const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  const numArr = input.map(Number);
  numArr.pop();
  numArr.map((num) => {
    let answer = "";
    for (let i = 3; i < num; i += 2) {
      const [num1, num2] = [i, num - i];
      if (isPrime(num1) && isPrime(num2)) {
        answer = `${num} = ${num1}+${num2}`;
        console.log(answer);
        check = true;
        return answer;
      }
    }
    console.log("Goldbach's conjecture is wrong.");
  });
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
