// 숫자 문자열과 영단어
// https://school.programmers.co.kr/learn/courses/30/lessons/81301

const number = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
};

function solution(s) {
  Object.keys(number).forEach(num => {
    s = s.replace(new RegExp(num, "g"), number[num]);
  });
  return s;
}

console.log(solution('one4seveneight'), 1478);
console.log(solution('23four5six7'), 234567);
console.log(solution('2three45sixseven'), 234567);
console.log(solution('123'), 123);
