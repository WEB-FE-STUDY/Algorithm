// 체육복
// https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let i = 0;
  while (i < reserve.length) {
    if (lost.includes(reserve[i])) {
      lost.splice(lost.indexOf(reserve[i]), 1);
      reserve.splice(i, 1);
      answer++;
    } else i++;
  }
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  lost.forEach(l => {
    let reserveStudent = reserve.find(r => l === r - 1 || l === r + 1);
    if (reserveStudent) {
      reserve.splice(reserve.indexOf(reserveStudent), 1);
      answer++;
    }
  })
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]), 5);
console.log(solution(5, [2, 4], [3]), 4);
console.log(solution(3, [3], [1]), 2);
console.log(solution(6, [2, 5, 6], [2, 4, 6]), 6);
console.log(solution(3, [1, 2], [2, 3]), 2);
console.log(solution(12, [1, 2, 3, 4, 8, 9, 10, 11], [9, 10]), 6);
console.log(solution(7, [2, 3, 4], [1, 2, 3, 6]), 6);
