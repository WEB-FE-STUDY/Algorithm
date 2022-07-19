// 4375 1

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  input = input.map((val) => +val);
  for (let i = 0; i < input.length; i++) {
    let answer = 1;
    let length = 1;
    while (true) {
      if (answer % input[i] !== 0) {
        answer = answer * 10 + 1;
        answer %= input[i]; // 숫자가 매우 커질 때 modular 연산
        length++;
      } else break;
    }
    console.log(length);
  }
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 모듈러 연산
// (A+B)%C = (A%C + B%C)%C
// 결과 값이 매우 큰 경우, 결과 값의 나머지를 구하라는 문제
// https://velog.io/@gidskql6671/%EB%82%98%EB%A8%B8%EC%A7%80Modulo-%EC%97%B0%EC%82%B0-%EB%B6%84%EB%B0%B0%EB%B2%95%EC%B9%99
