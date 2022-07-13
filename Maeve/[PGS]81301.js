// 숫자 문자열과 영단어

function solution(s) {
  const str2num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  // replaceAll 지원 안 함
  for (let i = 0; i < str2num.length; i++) {
    s = s.replace(new RegExp(str2num[i], "g"), i);
  }
  return +s;
}

// 개선

const str2num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function solution(s) {
  return Number(str2num.reduce((prev, next, index) => prev.replace(new RegExp(next, "g"), index), s));
}

// split & join 쓰는 방법
// split 으로 해당 문자열이 제외된 채 s를 분리하고 join으로 숫자를 넣어 합친다.
let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function solution(s) {
  return Number(numbers.reduce((prev, next, index) => prev.split(next).join(index), s));
}
