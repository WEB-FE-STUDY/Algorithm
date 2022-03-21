// 타겟 넘버
// https://programmers.co.kr/learn/courses/30/lessons/43165

const numbers = [1, 1, 1, 1, 1];
const target = 3;

function solution(numbers, target) {
  return (function dfs(sum = 0, index = 0) {
    if (index === numbers.length) return sum === target;
    return dfs(sum + numbers[index], index + 1) + dfs(sum - numbers[index], index + 1);
  })();
}

console.log(solution(numbers, target));
