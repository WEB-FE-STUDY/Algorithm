// 음양 더하기
// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  return absolutes.reduce((total, num, i) => total + (signs[i] ? num : -num), 0);
}

console.log(solution([4, 7, 12], [true, false, true]), 9);
console.log(solution([1, 2, 3], [false, false, true]), 9);
