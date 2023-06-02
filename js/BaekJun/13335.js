const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [_, length, weight] = input[0].split(" ").map(Number);
  const trucks = input[1].split(" ").map(Number);
  let time = 1;
  let sum = 0;
  const queue = [];
  while (true) {
    if (!trucks.length && !queue.length) break;
    if (weight >= sum + trucks[0] && queue.length <= length) {
      const truck = trucks.shift();
      sum += truck;
      queue.push([truck, time + length]);
      time++;
    } else {
      const [truck, passTime] = queue.shift();
      if (time < passTime) {
        time = passTime;
      }
      sum -= truck;
    }
  }
  return time;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
