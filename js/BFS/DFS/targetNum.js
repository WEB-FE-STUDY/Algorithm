function solution(numbers, target) {
  let answer = 0;

  function dfs(depth, sum) {
    if (depth === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }
  dfs(0, 0);
  return answer;
}
const numbers1 = [1, 1, 1, 1, 1];
const numbers2 = [4, 1, 2, 1];
const [target1, target2] = [3, 4];

console.log(solution(numbers1, target1));
console.log(solution(numbers2, target2));
