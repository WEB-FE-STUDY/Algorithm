// 16197 두 동전
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const solution = (input) => {
  const [n, m] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split(""));

  // 코인 위치 구하기
  const coinIndex = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === "o") coinIndex.push([i, j]);
    }
  }

  let answer = Infinity;

  const isRangeOver = (x, y) => {
    return x < 0 || x >= n || y < 0 || y >= m;
  };

  const move = (x1, y1, x2, y2, count, dir) => {
    if (count > answer) return;
    if (count > 10) {
      // 예제 4 - 두 동전을 떨어뜨릴 수 없는 경우 10 넘어가면 리턴
      answer = Math.min(answer, count);
      return;
    }

    let [nx1, ny1] = [x1 + dx[dir], y1 + dy[dir]];
    let [nx2, ny2] = [x2 + dx[dir], y2 + dy[dir]];

    // 둘 다 떨어지는 경우
    if (isRangeOver(nx1, ny1) && isRangeOver(nx2, ny2)) return;
    // 하나만 떨어지는 경우
    if (isRangeOver(nx1, ny1) && !isRangeOver(nx2, ny2)) {
      answer = Math.min(answer, count);
      return;
    }
    if (!isRangeOver(nx1, ny1) && isRangeOver(nx2, ny2)) {
      answer = Math.min(answer, count);
      return;
    }
    // 모두 떨어지지 않는 경우
    // 벽에 막혔으면 이전 위치로 조정
    if (map[nx1][ny1] === "#") [nx1, ny1] = [x1, y1];
    if (map[nx2][ny2] === "#") [nx2, ny2] = [x2, y2];

    for (let i = 0; i < 4; i++) {
      move(nx1, ny1, nx2, ny2, count + 1, i);
    }
  };

  for (let i = 0; i < 4; i++) {
    const [x1, y1] = [coinIndex[0][0], coinIndex[0][1]];
    const [x2, y2] = [coinIndex[1][0], coinIndex[1][1]];
    move(x1, y1, x2, y2, 1, i);
  }

  // 동전을 떨어뜨릴 수 없거나(이 경우도 answer > 10) 버튼을 10번보다 많이 누를 경우 -1 출력
  if (answer > 10) answer = -1;
  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
