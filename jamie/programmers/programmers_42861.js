// 섬 연결하기
// https://programmers.co.kr/learn/courses/30/lessons/42861

function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);
  const connected = Array.from({ length: n }, (() => []));
  let total = 0;

  const checkConnection = (i) => {
    let count = 0;
    const visited = [];

    const dfs = (i) => {
      for (const island of connected[i]) {
        if (visited.includes(island)) continue;
        visited.push(island);
        count += 1;
        dfs(island);
      }
    }

    dfs(i);

    return [visited, count];
  }

  for (const [islandA, islandB, cost] of costs) {
    const [visited, count] = checkConnection(islandA);
    if (count === n) return total;
    if (visited.includes(islandB)) continue;
    connected[islandA].push(islandB);
    connected[islandB].push(islandA);
    total += cost;
  }

  return total;
}

console.log(solution(4, [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]), 4);
console.log(solution(5, [[0,1,5],[1,2,3],[2,3,3],[3,1,2],[3,0,4],[2,4,6],[4,0,7]]), 15);
console.log(solution(4, [[0,1,1],[0,2,2],[2,3,1]]), 4);
