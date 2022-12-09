// 16198 에너지 모으기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  let n = Number(input[0]);
  const weights = input[1].split(" ").map(Number);

  let max = 0;

  recursive = (sum, arr) => {
    if (arr.length < 3) {
      max = Math.max(sum, max);
      return;
    }

    for (let i = 1; i < arr.length - 1; i++) {
      recursive(
        sum + arr[i - 1] * arr[i + 1],
        arr.filter((_, index) => index !== i)
      );
    }
  };

  // 이거 필요 없고 recursive(0, weights); 해주면 됨
  // for (let i = 1; i < n - 1; i++) {
  //   recursive(
  //     sum + weights[i - 1] * weights[i + 1],
  //     weights.filter((_, index) => index !== i)
  //   );
  // }

  recursive(0, weights);

  console.log(max);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 구슬 제거 => filter로 배열 다시 만듦
// filter를 제대로 한 번 써봤다 이거 짱이다 ..
