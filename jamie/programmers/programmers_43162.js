// 네트워크
// https://programmers.co.kr/learn/courses/30/lessons/43162

const n = 3;
const computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];

function solution(n, computers) {
  let answer = 0;
  const visited = [];

  const dfs = (arr, cur) => {
    visited.push(cur);
    arr.forEach((isConnected, index) => {
      if (isConnected && index !== cur && !visited.includes(index)) dfs(computers[index], index);
    });
  };

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (computers[i][j] && !visited.includes(j)) {
        dfs(computers[j], j);
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution(n, computers));
