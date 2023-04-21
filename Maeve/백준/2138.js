// 2138 전구와 스위치
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input[0]);
  const from = input[1].split("").map(Number);
  const to = input[2].split("").map(Number);

  let answer = Infinity;
  let count = 0;

  const solve = (firstLightOn) => {
    const temp = [...from]; // 배열 초기화 해줘야 함
    count = 0;

    const lightOn = (index) => {
      if (index > 0) temp[index - 1] = temp[index - 1] === 1 ? 0 : 1;
      temp[index] = temp[index] === 1 ? 0 : 1;
      if (index + 1 < N) temp[index + 1] = temp[index + 1] === 1 ? 0 : 1;
    };

    // 0 번째 전구 켤 때
    if (firstLightOn) {
      temp[0] = temp[0] === 1 ? 0 : 1;
      temp[1] = temp[1] === 1 ? 0 : 1;
      count++;
    }

    for (let i = 1; i < N; i++) {
      if (temp[i - 1] !== to[i - 1]) {
        lightOn(i);
        count++;
      }
    }

    if (temp.join("") === to.join("")) {
      answer = Math.min(answer, count);
    }
  };

  solve(true); // 0 번째 전구 켤 때
  solve(false); // 0 번째 전구 끌 때
  console.log(answer !== Infinity ? answer : -1);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// https://staticvoidlife.tistory.com/143
// https://astrid-dm.tistory.com/429
