// 13913 숨바꼭질 4
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [n, k] = input.split(" ").map(Number);

  const path = new Array(100001).fill(false);
  const visited = new Array(100001).fill(false);

  function bfs(n) {
    const queue = [];
    queue.push([n, 0]);
    visited[n] = true;

    while (queue.length !== 0) {
      const [position, time] = queue.shift();
      if (position === k) return time;

      for (next of [position * 2, position + 1, position - 1]) {
        // 방문하지 않았고 범위 이내면 경로 기록, 방문 처리, 큐에 넣기
        if (!visited[next] && next >= 0 && next <= 100000) {
          path[next] = position;
          visited[next] = true;
          queue.push([next, time + 1]);
        }
      }
    }
  }

  // 이렇게 하면 메모리 초과
  // function isValid(nextPosition) {
  //   if (nextPosition < 0 || nextPosition > 100000) return false;
  //   if (visited[nextPosition]) return false;
  //   return true;
  // }

  // queue.push([n, [n], 0]);
  // visited[n] = true;

  // while (queue.length !== 0) {
  //   const [position, path, count] = queue.shift();

  //   if (position === k) {
  //     time = count;
  //     move = path;
  //     break;
  //   }

  //   if (isValid(position * 2)) {
  //     visited[position * 2] = true;
  //     queue.push([position * 2, [...path, position * 2], count + 1]);
  //   }
  //   if (isValid(position + 1)) {
  //     visited[position + 1] = true;
  //     queue.push([position + 1, [...path, position + 1], count + 1]);
  //   }
  //   if (isValid(position - 1)) {
  //     visited[position - 1] = true;
  //     queue.push([position - 1, [...path, position - 1], count + 1]);
  //   }
  // }

  const time = bfs(n);
  const order = [];
  order.push(k);
  let prev = path[k];
  for (let i = 0; i < time; i++) {
    order.push(prev);
    prev = path[prev];
  }

  console.log(time);
  console.log(order.reverse().join(" "));
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});

// 큐에 이동 정보까지 같이 넘긴다
// 메모리 초과 -> 방문 경로를 다른 방법으로 저장해야 함
// https://www.acmicpc.net/board/view/44661
// 자취를 전부 기록하면 O(n)개의 점 각각에 대해 길이 O(n)개의 자취가 남아서 O(N^2)의 메모리를 필요로 한다 -> 시간초과
// 해결법 -> 경로 배열에 다음 위치 x의 인덱스에 이전 위치 값을 넣어줌
// https://gobae.tistory.com/38
