// 삼각 달팽이
// https://programmers.co.kr/learn/courses/30/lessons/68645

function solution(n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(Array.from({ length: i }, () => 0));
  }

  let a = -1, b = 0, move = n, num = 1;
  while (move > 0) {
    for (let i = 0; i < move; i++) {
      answer[++a][b] = num++;
    }
    for (let i = 0; i < move - 1; i++) {
      answer[a][++b] = num++;
    }
    for (let i = 0; i < move - 2; i++) {
      answer[--a][--b] = num++;
    }
    move -= 3;
  }
  return answer.reduce((total, arr) => total.concat(arr), []);
}

console.log(solution(4), [1, 2, 9, 3, 10, 8, 4, 5, 6, 7]);
console.log(solution(5), [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9]);
console.log(solution(6), [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11]);
