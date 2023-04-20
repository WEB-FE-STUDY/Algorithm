// 22251 빌런 호석
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [N, K, P, X] = input.split(" ").map(Number);
  const numbers = [
    [1, 1, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 0, 1],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1],
    [0, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1],
  ]; //10 * 7

  let answer = 0;

  for (let i = 1; i <= N; i++) {
    if (i === X) continue;
    let count = 0; // i층을 표현하기 위해 바꾼 디스플레이 개수
    let [from, to] = [X, i]; // from에서 to로 숫자를 바꾼다
    for (let j = 0; j < K; j++) {
      // 자릿수만큼 반복문을 돌려 바꾼 LED 개수를 카운트
      for (let z = 0; z < 7; z++) {
        // 1의 자리 확인
        if (numbers[from % 10][z] !== numbers[to % 10][z]) count++;
      }
      from = Math.floor(from / 10);
      to = Math.floor(to / 10);
    }
    if (count <= P) answer++;
  }

  console.log(answer);
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});

// 반전시키는 횟수 내가 다 계산? -> 그래도 되긴 함 https://boomrabbit.tistory.com/196
// 7칸 짜리 for문 돌려서 배열값 다른 개수 카운트해도 됨 https://astrid-dm.tistory.com/444
