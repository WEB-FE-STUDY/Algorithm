const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [A, B, C] = input.split(" ").map((str) => Number(str));

  const [first, second, third, fourth] = [
    (A + B) % C,
    ((A % C) + (B % C)) % C,
    (A * B) % C,
    ((A % C) * (B % C)) % C,
  ];
  [first, second, third, fourth].map((idx) => console.log(idx));
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});
2:40