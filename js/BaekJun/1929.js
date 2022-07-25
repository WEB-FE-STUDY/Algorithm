const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [num1, num2] = input.split(" ").map(Number);
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  for (let i = num1; i <= num2; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});
