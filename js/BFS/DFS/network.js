function solution(n, computers) {
  let answer = 0;
  let check = Array.from({ length: n }, () => false);

  function dfs(idx) {
    check[idx] = true;
    for (let i = 0; i < n; i++) {
      const connections = computers[idx];
      if (!check[i] && connections[i]) {
        dfs(i);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!check[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
  for (let i = 0; i < n; i++) {
    const computer = computers[i];
    const connected = computer.filter((connect) => connect === 0).length;
    console.log(connected);
    if (answer < connected) {
      answer = connected;
    }
  } // 잔머리 굴렸다가 틀림...
}

const computers1 = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
const computers2 = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
];
const [n1, n2] = [3, 3];

console.log(solution(n1, computers1));
console.log(solution(n2, computers2));
