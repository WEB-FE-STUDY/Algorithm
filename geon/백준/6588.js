const LENGTH = 1000000;
const input = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split(/\s+/).map(Number);
const answer = [];
let arr = Array(LENGTH).fill(true);
input.pop();

arr[0] = false;
arr[1] = false;

for (let i = 2; i * i <= LENGTH; i++) {
  if (arr[i]) {
    for (let j = i * i; j <= LENGTH; j += i) {
      arr[j] = false;
    }
  }
}

input.forEach((v) => {
  for (let i = 3; i * 2 <= v; i++) {
    if (arr[i] && arr[v - i]) {
      answer.push(`${v} = ${i} + ${v - i}`);
      break;
    }
  }
});

console.log(answer.join("\n"));
