// [1차] 다트 게임
// https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  const answer = Array.from({ length: 3 }, () => '');
  let i = 0;
  let isNum = true;
  dartResult.split('').forEach((item) => {
    if (/[0-9]/.test(parseInt(item))) {
      if (!isNum) {
        isNum = true;
        i++;
      }
      answer[i] += item;
    }
    if (/[SDT]/.test(item)) {
      isNum = false;
      answer[i] = +answer[i];
      if (item === 'D') answer[i] = answer[i]**2;
      if (item === 'T') answer[i] = answer[i]**3;
    }
    if (item === '*') {
      if (i-1 >= 0) answer[i-1] *= 2;
      answer[i] *= 2;
    }
    if (item === '#') {
      answer[i] = -answer[i];
    }
  });
  return answer.reduce((total, num) => total + num, 0);
}

console.log(solution('1S2D*3T'), 37);
console.log(solution('1D2S#10S'), 9);
console.log(solution('1D2S0T'), 3);
console.log(solution('1S*2T*3S'), 23);
console.log(solution('1D#2S*3S'), 5);
console.log(solution('1T2D3D#'), -4);
console.log(solution('1D2S3T*'), 59);
