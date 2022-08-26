// 10866 덱
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  input.shift();

  const deque = [];
  const answer = [];

  input.forEach((el) => {
    const [cmd, number] = el.split(" ");

    switch (cmd) {
      case "push_front":
        deque.unshift(number);
        break;
      case "push_back":
        deque.push(number);
        break;
      case "pop_front":
        answer.push(deque.shift() || -1);
        break;
      case "pop_back":
        answer.push(deque.pop() || -1);
        break;
      case "size":
        answer.push(deque.length);
        break;
      case "empty":
        answer.push(deque.length ? 0 : 1);
        break;
      case "front":
        answer.push(deque.at(0) || -1);
        break;
      case "back":
        answer.push(deque.at(-1) || -1);
    }
  });

  console.log(answer.join("\n"));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// forEach보다 for of 가 더 빠르다
