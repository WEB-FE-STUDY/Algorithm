function solution(numbers, target, sum = 0) {
  const [head, ...rest] = numbers;
  if (numbers.length === 0) return Number(sum === target);
  return solution(rest, target, sum + head) + solution(rest, target, sum - head);
}
