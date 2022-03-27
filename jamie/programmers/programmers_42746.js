// 가장 큰 수
// https://programmers.co.kr/learn/courses/30/lessons/42746

const numbers = [6, 10, 2];

function joinNums(a, b) {
  return Number(a.toString() + b.toString());
}

function solution(numbers) {
  if (numbers.every(num => num === 0)) return "0";
  else return numbers.sort((a, b) => joinNums(b, a) - joinNums(a, b)).join('');
}

console.log(solution(numbers));
