// 단속카메라

let visited = [];

function check(index, routes) {
  for (let i = index; i < routes.length; i++) {
    if (routes[index - 1][1] >= routes[i][0]) {
      visited[i] = 1;
    }
  }
}

function solution(routes) {
  let answer = 0;

  // routes.sort((a, b) => a[0] - b[0]); // 정렬을 시작점 기준으로
  routes.sort((a, b) => a[1] - b[1]); // 정렬을 도착점 기준으로

  for (let i = 0; i < routes.length; i++) {
    visited[i] = 0;
  }

  for (let i = 0; i < routes.length; i++) {
    if (!visited[i]) {
      answer++;
      check(i + 1, routes);
    }
  }

  return answer;
}
