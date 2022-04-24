// N으로 표현
// https://programmers.co.kr/learn/courses/30/lessons/42895

const calculate = (a, b) => [
  a + b,
  a - b,
  b - a,
  parseInt(a * b),
  parseInt(a / b),
  parseInt(b / a),
];

function solution(N, number) {
  const results = Array.from({ length: 9 }, () => new Set());
  let count = 1;

  while (count < 9) {
    for (let i = 1; i <= parseInt(count / 2); i++) {
      for (const numA of results[i]) {
        for (const numB of results[count - i]) {
          for (const result of calculate(numA, numB)) {
            result > 0 && results[count].add(result);
          }
        }
      }
    }
    const countNum = Number(String(N).repeat(count));
    results[count].add(countNum);

    if (results[count].has(number)) return count;
    count++;
  }
  return -1;
}

console.log(solution(5, 12), 4);
console.log(solution(2, 11), 3);
console.log(solution(5, 5), 1);
