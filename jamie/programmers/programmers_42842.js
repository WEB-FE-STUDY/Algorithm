// 카펫
// https://programmers.co.kr/learn/courses/30/lessons/42842

const brown = 24, yellow = 24;

function solution(brown, yellow) {
  const total = brown + yellow;

  for (let i = 0; i <= Math.sqrt(total); i++) {
    if (total % i === 0 && i + total / i - 2 === brown / 2)
      return [total / i, i];
  }
}

console.log(solution(brown, yellow));
