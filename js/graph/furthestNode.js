function solution(n, edge) {
  const matrix = new Array(n + 1).fill(0);
  for (let i = 1; i < matrix.length; i++) {
    matrix[i] = [];
  }

  edge.map((el) => {
    // 각 노드들의 연결된 노드들 정보
    const [from, to] = el;
    matrix[from].push(to);
    matrix[to].push(from);
  });

  // console.log(matrix);
  const visited = new Array(n + 1).fill(0); // bfs 방문 노드 저장용
  visited[0] = -1; // idx와 노드 일치,햇갈리지 않게 -1로
  // visited = [-1, 1, 0, 0,0, 0, 0]
  const bfs = (start) => {
    const queue = [start];
    visited[start] = 1; // 1만 보면 되니까 1로 고정
    while (queue.length) {
      const cur = queue.shift();
      // console.log(cur);
      for (let i = 0; i < matrix[cur].length; i++) {
        const next = matrix[cur][i]; //3,2,6,4,2,1...
        if (!visited[next] || visited[next] > visited[cur] + 1) {
          // 방문 안한 노드일 경우
          queue.push(next);
          visited[next] = visited[cur] + 1;
        }
      }
    }
    console.log(visited);
  };
  bfs(1);

  const maxValue = Math.max(...visited);
  return visited.filter((el) => el === maxValue).length;
}

const n = 6;
const vertex = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];
console.log(solution(n, vertex));
