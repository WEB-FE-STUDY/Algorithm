function solution(absolutes, signs) {
  let answer = 0;
  absolutes.map((absolute, idx) => {
    signs[idx] ? (answer += absolute) : (answer -= absolute);
  });
  return answer;
}
