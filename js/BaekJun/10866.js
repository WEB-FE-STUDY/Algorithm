const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const deque = [];
  const answer = [];
  const inputArr = input;
  inputArr.shift();
  const commands = inputArr.map((el) => el.split(" "));
  commands.forEach((el) => {
    switch (el[0]) {
      case "push_front":
        deque.unshift(Number(el[1]));
        break;
      case "push_back":
        deque.push(Number(el[1]));
        break;
      case "pop_front":
        deque.length === 0 ? answer.push(-1) : answer.push(deque.shift());
        break;
      case "pop_back":
        deque.length === 0 ? answer.push(-1) : answer.push(deque.pop());
        break;
      case "size":
        answer.push(deque.length);
        break;
      case "empty":
        deque.length === 0 ? answer.push(1) : answer.push(0);
        break;
      case "front":
        deque.length === 0 ? answer.push(-1) : answer.push(deque[0]);
        break;
      case "back":
        deque.length === 0 ? answer.push(-1) : answer.push(deque[deque.length - 1]);
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
