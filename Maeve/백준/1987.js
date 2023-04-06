// 1297 - 알파벳
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [R, C] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split(""));
  // console.log(map);

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const visited = new Array(26).fill(false);

  let answer = 0;

  const dfs = (i, j, count) => {
    answer = Math.max(answer, count);

    for (let dir = 0; dir < 4; dir++) {
      const [nx, ny] = [i + dx[dir], j + dy[dir]];

      if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
      if (visited[map[nx][ny].charCodeAt(0) - 65] === false) {
        visited[map[nx][ny].charCodeAt(0) - 65] = true;
        dfs(nx, ny, count + 1);
        visited[map[nx][ny].charCodeAt(0) - 65] = false;
      }
    }
  };

  visited[map[0][0].charCodeAt(0) - 65] = true;
  dfs(0, 0, 1);

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
