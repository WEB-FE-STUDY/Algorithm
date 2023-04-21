const RIGHT = 2;
const LEFT = 6;
const l = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n");
const t = Number(l[0]);
const k = Number(l[t + 1]);
const gears = l.slice(1, t + 1).map((v) => v.split("").map(Number));
const rotates = [];
for (let i = t + 2; i < t + 2 + k; i++) {
  const [gearNo, direction] = l[i].split(" ").map(Number);
  rotates.push([gearNo - 1, direction]);
}

const rotateClockwise = (gear) => gear.unshift(gear.pop());
const rotateCounterClockwise = (gear) => gear.push(gear.shift());

for (const [gearNo, direction] of rotates) {
  const directions = Array(gears.length).fill(0);

  directions[gearNo] = direction;
  // 왼쪽 탐색
  for (let i = gearNo - 1; i >= 0; i--) {
    if (gears[i + 1][LEFT] !== gears[i][RIGHT]) {
      directions[i] = -directions[i + 1];
    } else {
      break;
    }
  }
  // 오른쪽 탐색
  for (let i = gearNo + 1; i < gears.length; i++) {
    if (gears[i - 1][RIGHT] !== gears[i][LEFT]) {
      directions[i] = -directions[i - 1];
    } else {
      break;
    }
  }

  directions.forEach((d, i) => {
    if (d === 1) {
      rotateClockwise(gears[i]);
    } else if (d === -1) {
      rotateCounterClockwise(gears[i]);
    }
  });
}

console.log(gears.filter((gear) => gear[0]).length);
