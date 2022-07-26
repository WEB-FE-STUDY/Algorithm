// 일곱 난쟁이
// https://www.acmicpc.net/problem/2309

const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).sort((a, b) => a - b);

const total = inputs.reduce((total, num) => total + num);

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (total - 100 === inputs[i] + inputs[j]) {
      console.log(inputs.filter(num => num !== inputs[i] && num !== inputs[j]).join('\n'));
      break;
    }
  }
}
