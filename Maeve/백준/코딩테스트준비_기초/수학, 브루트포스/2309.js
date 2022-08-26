// 2309 - 일곱 난쟁이

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  input = input.map(Number).sort((a, b) => a - b);
  let sum = input.reduce((prev, cur) => prev + cur); // 덧셈 인자 안 넣어도 됨

  // let breakLoop = false;
  // for (let i = 0; i < 8; i++) {
  //   for (let j = i + 1; j < 9; j++) {
  //     if (sum - input[i] - input[j] === 100) {
  //       input.splice(j, 1);
  //       input.splice(i, 1);
  //       breakLoop = true;
  //       break;
  //     }
  //   }
  //   if (breakLoop) break;
  // }
  let answer = [];
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - input[i] - input[j] === 100) answer = input.filter((_, index) => index !== i && index !== j);
    }
  }
  // console.log(input.join("\n"));
  console.log(answer.join("\n"));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// for 문을 돌면서 두 명을 찾으면 리스트에서 빼는 식으로 구현
// 이 방식의 문제점은, 가능한 정답이 여러 가지인 경우에 2명보다 많이 빠질 수 있다는 점
// 이중 for 문을 탈출하기 위해 변수 추가

// filter 쓰면 탈출 안 해도 됨
// 가장 나중 케이스가 됨
