// 가장 큰 수

//2
function solution(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');

  // 0만 들어있을 때 처리
  return answer[0] === '0' ? '0' : answer;
}

//1
function notAllZero(numbers) {
  // 0만 있는 게 문제
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) return true;
  }
  return false;
}

function solution(numbers) {
  let answer = '';

  if (!notAllZero(numbers)) return '0';

  let toString = numbers.map((e) => e.toString());

  toString.sort((a, b) => {
    if (+(a + b) > +(b + a)) return -1;
    if (+(a + b) < +(b + a)) return 1;
    else return 0;
  });

  toString.forEach((number) => (answer += number));

  return answer;
}

// sort 커스텀 함수 만들기
// 두 개 더해서 비교하기
// 테스트 11 - 모두 0일 때
