function solution(a, b) {
  let answer = 0;
  answer = a.reduce((pre, cur, idx) => (pre += cur * b[idx]), 0);
  return answer;
}

const [a1, b1] = [
  [1, 2, 3, 4],
  [-3, -1, 0, 2],
];
const [a2, b2] = [
  [-1, 0, 1],
  [1, 0, -1],
];
console.log(solution(a1, b1), solution(a2, b2));
