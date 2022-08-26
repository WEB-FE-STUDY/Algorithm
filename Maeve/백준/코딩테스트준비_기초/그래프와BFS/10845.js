// 10845 큐
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  input.shift();

  const queue = [];
  const answer = [];

  function qPush(number) {
    queue.push(+number);
  }

  function qPop() {
    if (queue.length) {
      const front = queue.shift();
      answer.push(front);
    } else answer.push(-1);
  }

  function qSize() {
    answer.push(queue.length);
  }

  function qEmpty() {
    if (queue.length) answer.push(0);
    else answer.push(1);
  }

  function qFront() {
    if (queue.length) answer.push(queue.at(0));
    else answer.push(-1);
  }

  function qBack() {
    if (queue.length) answer.push(queue.at(-1));
    else answer.push(-1);
  }

  input.forEach((el) => {
    if (el === "pop") qPop();
    else if (el === "size") qSize();
    else if (el === "empty") qEmpty();
    else if (el === "front") qFront();
    else if (el === "back") qBack();
    else qPush(el.slice(5));
  });

  console.log(answer.join("\n"));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
