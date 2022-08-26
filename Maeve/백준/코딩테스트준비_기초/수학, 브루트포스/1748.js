// 1748 수 이어 쓰기 1

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let left = Number(input);
  let answer = 0;

  while (left >= 10) {
    let size = left.toString().length;
    let current = left - (10 ** (size - 1) - 1);
    answer += current * size;
    left -= current;
  }
  answer += left * 1;

  console.log(answer);
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});

/* 
252 = (120 - (100 - 1)) * 3 
     + (99 - (10 - 1)) * 2
     + 9 * 1

1 ~ 9 : 한 자리, 9개
10 ~ 99 : 두 자리, 90개
100 ~ 999 : 세 자리, 900 개 
1000 ~ 9999 : 네 자리, 9000 개 
*/
