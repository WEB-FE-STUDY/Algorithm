// 타겟넘버

let answer = 0;

function dfs(numbers, sum, sign, index, target) {
  if (index === numbers.length) {
    if (sum === target) answer++;
    return;
  }

  if (sign === '+') {
    sum = sum + numbers[index];
  } else {
    sum = sum - numbers[index];
  }

  dfs(numbers, sum, '+', index + 1, target);
  dfs(numbers, sum, '-', index + 1, target);
}

function solution(numbers, target) {
  dfs(numbers, 0, '+', 0, target);
  dfs(numbers, 0, '-', 0, target);

  return answer / 2;
}
