// 16236 아기 상어
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input.shift());
  const map = input.map((el) => el.split(" ").map(Number));

  const shark = {
    x: 0,
    y: 0,
    count: 2,
    size: 2,
  };

  let fish = [];

  let time = 0;

  // 상어 정보 채우고 상어 위치 0으로 변경
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 9) {
        shark.x = i;
        shark.y = j;
        map[i][j] = 0;
      }
    }
  }

  // BFS로 아기 상어를 움직이자

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  bfs(shark.x, shark.y);

  function bfs(x, y) {
    const visited = Array.from(Array(N), () => new Array(N).fill(false));

    fish = [];

    // 큐에 좌표와 거리를 넣음
    const q = [];
    q.push([x, y, 0]);

    while (q.length !== 0) {
      const [curX, curY, curD] = q.shift();

      for (let next = 0; next < 4; next++) {
        let [nextX, nextY, nextD] = [curX + dx[next], curY + dy[next], curD + 1];

        // 통과할 수 있으면 - 사각형 범위 벗어나지 않고, 방문하지 않았고, 상어 크기가 물고기보다 크거나 같고
        if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) continue;
        if (!visited[nextX][nextY] && map[nextX][nextY] <= shark.size) {
          visited[nextX][nextY] = true;
          q.push([nextX, nextY, nextD]);

          // 빈칸이 아니고 상어가 물고기를 먹을 수 있으면
          if (map[nextX][nextY] !== 0 && shark.size > map[nextX][nextY]) {
            fish.push({ x: nextX, y: nextY, distance: nextD });
          }
        }
      }
    }
  }

  // 여기까지 한 depth 돌면서 물고기 후보를 담은 거
  while (fish.length !== 0) {
    if (fish.length === 1) {
      shark.x = fish[0].x;
      shark.y = fish[0].y;
      map[shark.x][shark.y] = 0; // 9는 칠하지 않는다
      shark.count--;
      if (shark.count === 0) {
        shark.size++;
        shark.count = shark.size;
      }
      time += fish[0].distance;
      fish.shift(); // fish 초기화 되는데 할 필요 있나
      bfs(shark.x, shark.y);
    } else if (fish.length >= 2) {
      fish.sort((a, b) => {
        let aD = a.distance;
        let bD = b.distance;

        // sort1 - distance
        if (aD < bD) return -1;
        else if (aD > bD) return 1;
        else {
          // sort2 - x
          [aD, bD] = [a.x, b.x];
          if (aD < bD) return -1;
          else if (aD > bD) return 1;
          else {
            // sort3 - y
            [aD, bD] = [a.y, b.y];
            if (aD < bD) return -1;
            else if (aD > bD) return 1;
            else return 0;
          }
        }
      });

      shark.x = fish[0].x;
      shark.y = fish[0].y;
      map[shark.x][shark.y] = 0;
      shark.count--;
      if (shark.count === 0) {
        shark.size++;
        shark.count = shark.size;
      }
      time += fish[0].distance;
      fish.shift(); // fish 초기화 되는데 할 필요 있나
      bfs(shark.x, shark.y);
    }
  }

  if (fish.length === 0) return console.log(time);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// https://jaekwan.tistory.com/149
