// 이진 변환 반복하기
// https://programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let count = 0, zero = 0;

  while (s !== '1') {
    s = s.split('').filter(v => {
      if (v !== '0') return true;
      else zero++; return false;
    }).join('');
    s = s.length.toString(2);
    count++;
  }

  return [count, zero];
}

console.log(solution('110010101001'), [3, 8]);
