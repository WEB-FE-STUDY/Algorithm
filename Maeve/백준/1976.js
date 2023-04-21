// 1976 여행가자
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  // console.log(input);
  const N = Number(input[0]);
  const M = Number(input[1]);
  const info = [];
  for (let i = 2; i < 2 + N; i++) {
    info.push(input[i].split(" ").map(Number));
  }
  const path = input.at(-1).split(" ").map(Number);

  const parents = new Array(N);

  for (let i = 1; i < N; i++) {
    parents[i] = i;
  }

  const findUni = (v) => {
    if (v === parents[v]) return v; // 아직 공통 조상의 합집합을 가려내지 않았거나 해당 배열의 값이 공통 조상의 것
    parents[v] = findUni(parents[v]); // 그렇지 않으면 다시 그 조상의 조상을 찾음
    return parents[v];
  };

  const union = (a, b) => {
    a = findUni(a);
    b = findUni(b);
    // console.log("a, b = ", a, b);
    if (a < b) parents[b] = a;
    else parents[a] = b;
  };

  // 합치는 과정
  // for (let i = 1; i <= N; i++) {
  //   for (let j = 1; j <= N; j++) {
  //     // 연결되어 있고 합집합의 여부를 판단하지 않았다면 union 알고리즘 실행
  //     // console.log(parents[i], parents[j]);
  //     if (info[i - 1][j - 1] === 1 && parents[i] !== parents[j]) union(i, j);
  //   }
  // }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (info[i][j] === 1) union(i, j);
    }
  }
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// Union Find (공통조상의 합집합 만들기): https://my-coding-notes.tistory.com/332
// https://astrid-dm.tistory.com/412
