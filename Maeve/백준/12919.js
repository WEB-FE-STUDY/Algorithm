// 12919 A와 B 2
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const S = input[0];
  const T = input[1];

  let isAvailable = 0;

  const recursive = (s, t) => {
    if (s === t) {
      isAvailable = 1;
      return;
    }

    if (s.length >= t.length) return;
    if (t.at(-1) === "A") {
      recursive(s, t.slice(0, -1));
    }
    if (t[0] === "B") {
      recursive(s, t.slice(1).split("").reverse().join(""));
    }
  };

  recursive(S, T);

  console.log(isAvailable);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// "뒤집기": A->B, B->A 가 아니라 좌우를 뒤집는 거였음
// index 초기값 1이 아니라 S 길이 넣어야 함
// -> 시간 초과 (2^50)

// S에 늘리지 말고 T에서 제거해보래 https://astrid-dm.tistory.com/m/469
// 조건에 맞게 문자 제거
