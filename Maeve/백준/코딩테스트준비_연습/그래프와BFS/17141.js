// 17141 연구소 2

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split(" ").map(Number));

  const available = [];

  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  const answer = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 2) {
        available.push([i, j]);
      }
    }
  }

  const virus = [];

  const spreadVirus = () => {
    // 뽑히지 않았으면 map에서 0으로, 뽑혔으면 map에서 2로
    available.forEach((el) => {
      const [x, y] = el;
      map[x][y] = 0;
    });

    virus.forEach((el) => {
      const [x, y] = el;
      map[x][y] = 2;
    });

    let time = 0;
    const visited = Array.from(Array(N), () => new Array(N).fill(false));
    const queue = virus.map((el) => [...el, 0]);

    while (queue.length) {
      const [x, y, count] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

        if (!visited[nx][ny] && map[nx][ny] === 0) {
          queue.push([nx, ny, count + 1]);
          time = count + 1;
          visited[nx][ny] = true;
        }
      }
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (map[i][j] === 0 && !visited[i][j]) {
          answer.push(-1);
          return;
        }
      }
    }

    answer.push(time);
  };

  const dropVirusVisited = new Array(available.length).fill(false);

  const dropVirus = (index, count) => {
    if (count === M) {
      spreadVirus();
      return;
    }

    for (let i = index; i < dropVirusVisited.length; i++) {
      if (!dropVirusVisited[i]) {
        dropVirusVisited[i] = true;
        virus.push(available[i]);
        dropVirus(i + 1, count + 1);
        virus.pop();
        dropVirusVisited[i] = false;
      }
    }
  };

  dropVirus(0, 0);

  const filtered = answer.filter((value) => value !== -1);
  console.log(filtered.length ? Math.min(...filtered) : -1);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
