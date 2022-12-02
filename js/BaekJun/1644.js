const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num % 2 === 0) return num == 2 ? true : false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPrimeNum = (num) => {
  const arr = [];
  if (num > 1) arr.push(2);
  for (let i = 1; i <= num; i += 2) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
};

const solution = (input) => {
  const N = Number(input);
  let answer = 0;
  const primeNumArr = getPrimeNum(N);
  for (let i = 0; i < primeNumArr.length; i++) {
    let primeSum = 0;
    for (let t = i; t < primeNumArr.length; t++) {
      primeSum += primeNumArr[t];
      if (primeSum === N) {
        answer++;
        break;
      }
      if (primeSum > N) {
        break;
      }
    }
  }
  return answer;
};

rl.on("line", (answer) => {
  console.log(solution(answer));
  rl.close();
});
