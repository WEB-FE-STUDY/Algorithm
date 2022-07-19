//프로그래머스 가장 큰 수 Level2 50분
function solution(numbers) {
  const answer = numbers
    .map((v) => String(v))
    .sort((a, b) => b + a - (a + b))
    .join("");

  if (answer[0] === "0") return "0";

  return answer;
}
