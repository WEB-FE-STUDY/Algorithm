function solution(n, left, right) {
  const answer = [];

  for (let i = left; i < right + 1; i++) {
    const quotient = Math.floor(i / n); // y좌표
    const remainder = i % n; // x 좌표
    answer.push(Math.max(quotient, remainder) + 1);
  }
  return answer;
}
const [n1, left1, right1] = [3, 2, 5];
const [n2, left2, right2] = [4, 7, 14];

console.log(solution(n1, left1, right1), solution(n2, left2, right2));
