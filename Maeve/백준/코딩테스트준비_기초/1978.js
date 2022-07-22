// 1978 소수 찾기

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

// const eratos = new Array(1001).fill(1);

const solution = (input) => {
  const numbers = input[1].split(" ").map(Number);

  // for (let i = 2; i * i <= 1001; i++) {
  //   if (eratos[i]) {
  //     for (let j = i * i; j <= 1001; j += i) {
  //       eratos[j] = 0;
  //     }
  //   }
  // }

  const isPrime = (number) => {
    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  };

  let answer = 0;

  for (let i = 0; i < numbers.length; i++) {
    // if (eratos[numbers[i]]) answer++;
    if (isPrime(numbers[i])) answer++;
  }
  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
