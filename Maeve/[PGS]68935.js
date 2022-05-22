// 3진법 뒤집기
function solution(n) {
  let answer = 0;

  let ternary = "";

  while (n) {
    ternary += n % 3;
    n = Math.floor(n / 3);
  }

  let reversed = ternary.split("").reverse().join("");

  for (let i = 0; i < reversed.length; i++) {
    answer += +reversed[i] * 3 ** i;
  }

  return answer;

  // return parseInt([...n.toString(3)].reverse().join(""), 3);
}
