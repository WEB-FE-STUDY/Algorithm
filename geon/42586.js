function solution(progresses, speeds) {
  const answer = [];
  let temp = 0;
  let cnt = 1;
  for (let i = 0; i < progresses.length; i++) {
    let period = 0;
    while (progresses[i] + period * speeds[i] < 100) {
      period++;
    }
    if (period > temp) {
      temp = period;
      answer.push(cnt);
      cnt = 1;
    } else cnt++;
  }
  answer.shift();
  answer.push(cnt);
  return answer;
}
