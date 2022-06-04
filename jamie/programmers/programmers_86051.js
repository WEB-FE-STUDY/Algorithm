// 없는 숫자 더하기
// https://programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  return numbers.reduce((sum, num) => sum - num, 45);
}
