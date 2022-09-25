// 큐
// https://www.acmicpc.net/problem/10845

const fs = require('fs');
const [, ...commands] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const queue = [];

const push = num => queue.push(num);
const pop = () => (queue.shift() || -1);
const size = () => (queue.length);
const empty = () => (queue.length === 0 ? 1 : 0);
const front = () => (queue[0] || -1);
const back = () => (queue.at(-1) || -1);

const answer = [];

commands.forEach((input) => {
  const [command, num] = input.split(' ');
  if (command.includes('push')) push(+num);
  else if (command === 'pop') answer.push(pop());
  else if (command === 'size') answer.push(size());
  else if (command === 'empty') answer.push(empty());
  else if (command === 'front') answer.push(front());
  else if (command === 'back') answer.push(back());
});

console.log(answer.join('\n'));
