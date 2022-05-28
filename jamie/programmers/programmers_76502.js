// 괄호 회전하기
// https://programmers.co.kr/learn/courses/30/lessons/76502

const brackets = {
  '(': ['open', 's'],
  ')': ['close', 's'],
  '{': ['open', 'm'],
  '}': ['close', 'm'],
  '[': ['open', 'l'],
  ']': ['close', 'l'],
};

function solution(s) {
  let count = 0;

  const arr = s.split('');

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let isBreak = false;

    for (let bracket of arr) {
      if (isBreak) break;
      const [type, size] = brackets[bracket];

      if (type === 'open') stack.push(size);
      else {
        if (stack[stack.length - 1] === size) stack.pop();
        else isBreak = true;
      }
    }
    (!isBreak && stack.length === 0) && count++;
    arr.push(arr.shift());
  }

  return count;
}

console.log(solution('[](){}'), 3);
console.log(solution('}]()[{'), 2);
console.log(solution('[)(]'), 0);
console.log(solution('}}}'), 0);
