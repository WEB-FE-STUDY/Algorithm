// 덱
// https://www.acmicpc.net/problem/10866

const fs = require('fs');
const [, ...commands] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const deck = [];

const pushFront = num => deck.unshift(num);
const pushBack = num => deck.push(num);
const popFront = () => (deck.shift() || -1);
const popBack = () => (deck.pop() || -1);
const size = () => (deck.length);
const empty = () => (deck.length === 0 ? 1 : 0);
const front = () => (deck[0] || -1);
const back = () => (deck.at(-1) || -1);

const answer = [];

commands.forEach((input) => {
  const [command, num] = input.split(' ');
  if (command.includes('push_front')) pushFront(+num);
  else if (command.includes('push_back')) pushBack(+num);
  else if (command === 'pop_front') answer.push(popFront());
  else if (command === 'pop_back') answer.push(popBack());
  else if (command === 'size') answer.push(size());
  else if (command === 'empty') answer.push(empty());
  else if (command === 'front') answer.push(front());
  else if (command === 'back') answer.push(back());
});

console.log(answer.join('\n'));
