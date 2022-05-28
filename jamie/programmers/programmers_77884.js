// 약수의 개수와 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let total = 0;
  for (let num = left; num <= right; num++) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        count++;
        (i !== num / i) && count++;
      }
    }
    total += count % 2 === 0 ? num : -num;
  }
  return total;
}

console.log(solution(13, 17), 43);
console.log(solution(24, 27), 52);
