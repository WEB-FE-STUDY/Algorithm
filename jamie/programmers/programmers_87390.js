// n^2 배열 자르기
// https://programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const row = ~~(i / n);
    const col = i % n;
    if (row === n - 1 || col === n - 1) answer.push(n);
    else if (row <= col) answer.push(col + 1);
    else answer.push(row + 1);

    // answer.push(Math.max(i % n, parseInt(i / n)) + 1);
  }

  return answer;
}

console.log(solution(3, 2, 5), [3, 2, 2, 3]);
console.log(solution(4, 7, 14), [4, 3, 3, 3, 4, 4, 4, 4]);
