// 컨베이어 벨트 위의 로봇
// https://www.acmicpc.net/problem/20055

const fs = require('fs');
let [[N, K], conveyorBelt] = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(arr => arr.split(' ').map(Number));

conveyorBelt = conveyorBelt.map(durability => ({ durability, robot: false }));

let zeroCount = 0;

const rotate = () => {
  conveyorBelt.unshift(conveyorBelt.pop());
  checkPostiionN();
}

const move = () => {
  for (let cur = N - 2; cur > 0; cur--) {
    const next = cur + 1;
    if (!conveyorBelt[cur].robot) continue;
    if (conveyorBelt[next].robot || conveyorBelt[next].durability === 0) continue;
    conveyorBelt[cur].robot = false;
    conveyorBelt[next].durability -= 1;
    conveyorBelt[next].robot = true;
    if (conveyorBelt[next].durability === 0) zeroCount += 1;
  }
  checkPostiionN();
}

const addRobot = () => {
  if (conveyorBelt[0].durability === 0) return;
  conveyorBelt[0].robot = true;
  conveyorBelt[0].durability -= 1;
  if (conveyorBelt[0].durability === 0) zeroCount += 1;
}

const checkPostiionN = () => {if (conveyorBelt[N - 1].robot) conveyorBelt[N - 1].robot = false;}

const start = () => {
  let count = 1;

  while (true) {
    rotate();
    move();
    addRobot();
    if (zeroCount >= K) return count;
    count++;
  }
}

console.log(start());
