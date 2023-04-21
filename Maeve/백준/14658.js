// 14658 하늘에서 별똥별이 빗발친다
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M, L, K] = input.shift().split(" ").map(Number);
  const star = input.map((el) => el.split(" ").map(Number));
  let answer = 0;
  // 이중 for 문으로 별을 돌면서 x 좌표, y 좌표 뽑고 그 점을 기준으로 L * L count 하기

  // 이중 for 문으로 별 두개를 고르고 x 좌표, y 좌표 뽑음
  for (let i = 0; i < K; i++) {
    for (let j = 0; j < K; j++) {
      let count = 0;
      const [x, y] = [star[i][0], star[j][1]];
      // 별 전체를 돌면서 L * L 트램펄린 안에 속했는지 count
      for (let s = 0; s < K; s++) {
        const [nx, ny] = [star[s][0], star[s][1]];
        if (nx >= x && nx <= x + L && ny >= y && ny <= y + L) count++; // 등호?
      }
      answer = Math.max(answer, count);
    }
  }

  console.log(K - answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 트램펄린의 모서리에 부딪혀도 튕겨나간다? -> 경계에 놓아도 되는 건가
// 한 변 길이가 4이면 5로 계산하는 거
// -> N, M 범위 커서 완탐하면 시간초과 남, K로 완탐해야 함

// https://velog.io/@dot2__/BOJ-14658%EB%B2%88-%ED%95%98%EB%8A%98%EC%97%90%EC%84%9C-%EB%B3%84%EB%98%A5%EB%B3%84%EC%9D%B4-%EB%B9%97%EB%B0%9C%EC%B9%9C%EB%8B%A4-Java
