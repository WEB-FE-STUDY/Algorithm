// 2609 - 최대공약수와 최소공배수

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [A, B] = input
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a); // A >= B

  const getGCD = (A, B) => {
    let r = A % B;
    while (r) {
      A = B;
      B = r;
      r = A % B;
    }
    return B;
  };

  const GCD = getGCD(A, B);
  const LCM = (A * B) / GCD;

  console.log(GCD);
  console.log(LCM);
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});

// 최대공약수(GCD) 유클리드 호제법
// "2 개의 자연수 a, b (a > b)에 대해 a를 b로 나눈 나머지가 r일 때, a 와 b의 최대공약수는 b 와 r의 최대공약수와 같다"
// 위 괴정을 반복하여 나머지가 0이 되었을 때 나누는 수가 최대공약수이다.
// 최소공배수(LCM)는 두 수의 곱을 최대공약수로 나눈 것과 같다

// gcd 재귀로도 풀 수 있음
// function uclid(a, b) {
//   if (b === 0) return a;
//   else return uclid(b, a % b);
// }
