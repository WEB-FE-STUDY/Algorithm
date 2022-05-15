function solution(n, lost, reserve) {
  let answer = n - lost.length;
  lost.map((lostStudent, idx) => {});
  return answer;
}

const [n1, lost1, reserve1] = [5, [2, 4], [1, 3, 5]];
const [n2, lost2, reserve2] = [5, [2, 4], [3]];
const [n3, lost3, reserve3] = [3, [3], [1]];

console.log(solution(n1, lost1, reserve1));
console.log(solution(n2, lost2, reserve2));
console.log(solution(n3, lost3, reserve3));
