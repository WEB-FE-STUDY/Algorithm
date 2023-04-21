// 2668 숫자고르기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input.shift());
  const numbers = input.map(Number);

  let visited = new Array(101).fill(false);
  let result = [];
  let index = 0;

  // 각 인덱스마다 해당 값을 가진 사이클을 가지는지 확인

  const dfs = (current, start) => {
    if (visited[current]) {
      if (current === start) result[index++] = start;
    } else {
      visited[current] = true;
      dfs(numbers[current - 1], start); // 연결된 값
    }
  };

  // 자신의 번호로 시작해서 자신의 번호로 돌아오는 번호만 배열에 저장
  for (let i = 1; i <= N; i++) {
    visited = new Array(101).fill(0);
    dfs(i, i);
  }

  console.log(index);
  for (let i = 0; i < index; i++) {
    console.log(result[i]);
  }

  // const goCheck = (picked) => {
  //   const set = [];
  //   const pickedSet = [];
  //   for (let num = 1; num <= N; num++) {
  //     if (!picked.includes(num)) {
  //       set.push(num);
  //       pickedSet.push(numbers[num - 1]);
  //     }
  //   }

  //   return [JSON.stringify(set) === JSON.stringify(pickedSet.sort((a, b) => a - b)), set];
  // };

  // const result = [];
  // const visited = new Array(101).fill(false);

  // const dfs = (idx, current, size) => {
  //   if (idx === size) {
  //     const picked = result.slice(0, idx);
  //     const [isAvailable, answer] = goCheck(picked);
  //     if (isAvailable) {
  //       console.log(answer.length);
  //       console.log(answer.join("\n"));
  //       process.exit();
  //     }
  //     return;
  //   }

  //   for (let i = current; i <= N; i++) {
  //     if (!visited[i]) {
  //       result[idx] = i;
  //       visited[i] = true;
  //       dfs(idx + 1, i + 1, size);
  //       visited[i] = false;
  //     }
  //   }
  // };

  // for (let max = 1; max <= N; max++) {
  //   dfs(0, 1, max);
  // }
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 제외할 걸 탐색해서 조건 맞으면 스탑
