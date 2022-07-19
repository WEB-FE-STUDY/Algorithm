// 나머지가 1이 되는 수 찾기

function solution(n) {
  let answer = 1;

  while (true) {
    if (n % answer === 1) break;
    else answer++;
  }

  return answer;
}
