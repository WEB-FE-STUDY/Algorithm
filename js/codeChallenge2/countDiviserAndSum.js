function solution(left, right) {
  let answer = 0;
  let gcd = 0;
  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        gcd += 1;
      }
    }
    gcd % 2 === 0 ? (answer += i) : (answer -= i);

    gcd = 0;
  }
  return answer;
}
