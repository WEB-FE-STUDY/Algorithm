//프로그래머스 H-index Level2 60분
function solution(citations) {
  const sorted = citations.sort((a, b) => a - b);
  const maxNum = Math.max(...sorted);
  let answer = 0;

  for (let h = maxNum; h > 0; h--) {
    let answer = 0;
    sorted.forEach((v) => {
      if (v >= h) {
        answer++;
      }
    });
    if (answer >= h) return h;
  }

  return answer;
}
