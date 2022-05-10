// 큰 수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  const stack = [];
  let count = k;
  for (let i = 0; i < number.length; i++) {
    while (count && stack[stack.length - 1] < number[i]) {
      stack.pop();
      count--;
    }
    if (stack.length < number.length - k) {
      stack.push(number[i]);
    }
  }
  return stack.join('');
}

console.log(solution("1924", 2), "94");
console.log(solution("1231234", 3), "3234");
console.log(solution("4177252841", 4), "775841");
