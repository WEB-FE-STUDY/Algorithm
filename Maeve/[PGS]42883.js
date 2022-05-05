// 큰 수 만들기

function solution(number, k) {
  let stack = [];

  for (let num of number) {
    while (num > stack[stack.length - 1] && k) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }

  return stack.join("").slice(0, stack.length - k);
}
