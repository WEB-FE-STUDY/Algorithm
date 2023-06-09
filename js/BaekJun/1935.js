const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const calculator = (operator, x, y) => {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
  }
};

const solution = (input) => {
  const n = Number(input.shift());
  const question = input.shift().split("");
  const values = input.map((el) => Number(el));
  const obj = {};
  for (let i = 0; i < n; i++) {
    obj[String.fromCharCode(i + 65)] = values[i];
  }
  const operator = ["+", "-", "*", "/"];
  const stack = [];
  const charWithNum = question.map((el) => (operator.includes(el) ? el : obj[el]));

  for (let i = 0; i < question.length; i++) {
    let char = charWithNum[i];
    if (operator.includes(char)) {
      const back = stack.pop();
      const front = stack.pop();

      char = calculator(char, front, back);
    }
    stack.push(char);
  }
  return Number(stack[0]).toFixed(2);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
