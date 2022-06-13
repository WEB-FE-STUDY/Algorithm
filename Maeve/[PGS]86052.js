// 빛의 경로 사이클

function solution(grid) {
  const answer = [];
  const ROW = grid.length; // 행 길이
  const COLUMN = grid[0].length; // 열 길이
  const visited = [...Array(ROW)].map(() => [...Array(COLUMN)].map(() => [...Array(4).map(() => 0)]));
  const dirMap = { S: 0, R: 1, L: 2 };
  const map = grid.map((r) => [...r].map((c) => dirMap[c]));
  const nextX = [0, 1, 0, -1]; // 북, 동, 남, 서
  const nextY = [1, 0, -1, 0];
  const transDir = [
    [0, 1, 3],
    [1, 2, 0],
    [2, 3, 1],
    [3, 0, 2],
  ]; // 방향 전환
  // trans[dir][map[r][c]] : dir 방향으로 향하고 있는데 map[r][c] 의 격자를 만나서 어느 방향으로 전환될 것인가
  // 북0, 동1, 남2, 서3

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COLUMN; j++) {
      for (let dir = 0; dir < 4; dir++) {
        if (visited[i][j][dir]) continue;

        let curDir = dir;
        let r = i;
        let c = j;
        let count = 0;

        while (!visited[r][c][curDir]) {
          count++;

          visited[r][c][curDir] = 1;
          curDir = transDir[curDir][map[r][c]]; // 방향 전환

          r += nextY[curDir]; // 좌표 갱신
          c += nextX[curDir];

          // 격자 벗어났는지 체크
          // 커서 넘어갔으면 0으로 바꾸고, 작아서 넘어갔으면 맨 오른쪽으로, 아니면 그대로
          r = r >= ROW ? 0 : r < 0 ? ROW - 1 : r;
          c = c >= COLUMN ? 0 : c < 0 ? COLUMN - 1 : c;
        }
        answer.push(count);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
