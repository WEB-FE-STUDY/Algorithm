// 내적
function solution(a, b) {
  let answer = 0;

  // for (let i = 0; i < a.length; i++) {
  //     answer += a[i] * b[i];
  // }

  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);

  // return answer;
}
