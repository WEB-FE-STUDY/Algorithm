// 10430 나머지

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [A, B, C] = input.split(" ").map((val) => +val);
  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});

// 문자열로 받아왔기 때문에 숫자로 변환해야 함
