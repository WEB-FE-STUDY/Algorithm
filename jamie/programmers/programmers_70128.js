// 내적
// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  return a.reduce((total, num, index) => total + num * b[index], 0);
}

console.log(solution([1,2,3,4], [-3,-1,0,2]), 3);
