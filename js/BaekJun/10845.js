const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const queue = [];
  const answer = [];
  const inputArr = input;
  inputArr.shift();
  const commands = inputArr.map((el) => el.split(" "));
  commands.forEach((el) => {
    switch (el[0]) {
      case "push":
        queue.push(Number(el[1]));
        break;
      case "pop":
        queue.length === 0 ? answer.push(-1) : answer.push(queue.shift());
        break;
      case "size":
        answer.push(queue.length);
        break;
      case "empty":
        queue.length === 0 ? answer.push(1) : answer.push(0);
        break;
      case "front":
        queue.length === 0 ? answer.push(-1) : answer.push(queue[0]);
        break;
      case "back":
        queue.length === 0 ? answer.push(-1) : answer.push(queue[queue.length - 1]);
        break;
      default:
        break;
    }
  });
  console.log(answer.join("\n"));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
