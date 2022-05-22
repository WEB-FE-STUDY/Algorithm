// 3진법 뒤집기
// https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  const arr = [];
  while (n) {
    arr.push(n % 3);
    n = Math.floor(n / 3);
  }
  return arr.reverse().reduce((decimal, n, i) => decimal + n * Math.pow(3, i));
}

console.log(solution(45), 7);
