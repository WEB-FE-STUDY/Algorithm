// 가장 먼 노드
// https://programmers.co.kr/learn/courses/30/lessons/49189

function solution(n, edge) {
  const connected = Array.from({ length: n + 1 }, () => []);

  const connect = (a, b) => {
    connected[a].push(b);
    connected[b].push(a);
  }

  edge.forEach(([a, b]) => connect(a, b));

  let prevCount = 1;
  const needToVisit = [];
  const visited = [];

  needToVisit.push(1);

  while (prevCount) {
    let count = 0;
    for (let i = 0; i < prevCount; i++) {
      const node = needToVisit.shift();
      visited.push(node);
      connected[node].forEach((connect) => {
        if (!visited.includes(connect) && !needToVisit.includes(connect)) {
          needToVisit.push(connect);
          count++;
        }
      });
    }

    if (!count) return prevCount;
    else prevCount = count;
  }
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]), 3);
