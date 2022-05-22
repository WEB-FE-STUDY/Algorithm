// 두 개 뽑아서 더하기
// https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const set = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }
  return [...set].sort((a, b) => a - b);
}

console.log(solution([2,1,3,4,1]), [2,3,4,5,6,7]);
